import { Injectable } from '@nestjs/common'
import { Order, OrderStatus, PaginatedOrder, PaginateQuery } from '@/types'
import { PrismaService } from '../prisma/prisma.service'
import { UpdateOrderDto } from './dto/update-order.dto'
import { EventEmitter2 } from '@nestjs/event-emitter'
import * as moment from 'moment'
import { paginateResource } from '@/common/utils/paginate'

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService, private eventEmitter: EventEmitter2) { }

    async findAll(query: PaginateQuery): Promise<PaginatedOrder> {
        return await paginateResource(this.prisma.order, query)
    }

    findOne(id: number): Promise<Order> {
        return this.prisma.order.findFirst({ where: { id } })
    }

    findBySid(sid: string): Promise<Order> {
        return this.prisma.order.findFirst({
            where: {
                DATA3: sid
            }
        })
    }

    async create(createOrderDto): Promise<Order> {
        let order = await this.prisma.order.create({ data: createOrderDto })
        this.emitCreateOrderHistory(order)
        return order
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        let order = await this.prisma.order.update({ where: { id }, data: { ...updateOrderDto } })
        this.emitCreateOrderHistory(order)

        // emit handle sms received / sms sent
        // emit handle voice to sms
        // emit handle intbound to callback
        // emit handle redis task?

        return order
    }

    // todo: from comm server
    // temporary added an update order of request POST
    // workaround for commserver cURL put request not working
    postUpdate() {

    }

    remove(id: number): Promise<Order> {
        return this.prisma.order.delete({
            where: {
                id
            }
        })
    }

    private emitCreateOrderHistory(payload: Order) {

        // Remove properties not needed for order history coming from order data.
        let removeProperties = ['item_id', 'client_id', 'createdAt', 'updatedAt', 'deleted_at', 'scheduled_time']
        removeProperties.forEach((property: string) => {
            delete payload[property]
        })

        this.eventEmitter.emit('order-history.create', {
            ...payload,
            order_id: payload.id,
            last_update: payload.updatedAt ?? moment().toISOString()
        })
    }

    updateOrderStatus(taskCreatedEventData, status: OrderStatus) {
        let id = JSON.parse(taskCreatedEventData.TaskAttributes).OrderID
        this.prisma.order.update({ where: { id }, data: { status } })
    }


    checkNextOrder(eventData) {
        console.log('check next order data:', eventData)
    }
}
