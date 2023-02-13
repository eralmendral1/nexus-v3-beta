import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { OrderHistory } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { CreateOrderHistoryDto } from './dto/create-order-history'

@Injectable()
export class OrderObserverService {
    constructor(private readonly primaService: PrismaService) { }

    @OnEvent('order-history.create')
    createOrderHistory(payload: any): Promise<OrderHistory> {
        return this.primaService.orderHistory.create({ data: payload })
    }
}