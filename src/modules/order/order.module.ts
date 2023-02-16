import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module'
import { OrderObserverService } from './order-observer.service'
import { CheckOrderDuplicate } from '@/common/middleware/check-order-duplicate.middleware'

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderObserverService],
  imports: [PrismaModule],
  exports: [OrderService]
})
export class OrderModule {
    // configure(consumer: MiddlewareConsumer) {
    //     // consumer.apply(CheckOrderDuplicate).forRoutes({ path: 'orders', method: RequestMethod.POST})
    // }
}
