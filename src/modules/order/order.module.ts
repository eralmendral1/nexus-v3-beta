import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module'
import { OrderObserverService } from './order-observer.service'

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderObserverService],
  imports: [PrismaModule]
})
export class OrderModule {}
