import { Controller, Get, Post, Patch, Delete, Param, Query, Body } from '@nestjs/common'
import { Order, PaginatedOrder, PaginateQuery } from '@/types'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderService } from './order.service'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("Orders")
@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get('')
    findAll(@Query() query: PaginateQuery): Promise<PaginatedOrder> {
        return this.orderService.findAll(query)
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(+id)
    }

    @Get('callSid/:sid')
    findBySid(@Param('sid') sid: string): Promise<Order> {
        return this.orderService.findBySid(sid)
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create(createOrderDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
        return this.orderService.update(+id, updateOrderDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Order> {
        return this.orderService.remove(+id)
    }
}
