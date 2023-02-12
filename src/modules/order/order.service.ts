import { Injectable } from '@nestjs/common'
import { Order } from '@/types'
import { PrismaService } from '../prisma/prisma.service'
import { UpdateOrderDto } from './dto/update-order.dto'

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    findAll(): Promise<Order[]> {
        return this.prisma.order.findMany()
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

    create(createOrderDto): Promise<Order> {
        return this.prisma.order.create({ data: createOrderDto })
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.prisma.order.update({ where: { id }, data: { ...updateOrderDto } })
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
}
