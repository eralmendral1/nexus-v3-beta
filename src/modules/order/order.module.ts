import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module'
import { OrderObserverService } from './order-observer.service'
import { CheckOrderDuplicate } from '@/common/middleware/check-order-duplicate.middleware'

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderObserverService],
  imports: [PrismaModule]
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CheckOrderDuplicate).forRoutes({ path: 'orders', method: RequestMethod.POST})
    }
}
