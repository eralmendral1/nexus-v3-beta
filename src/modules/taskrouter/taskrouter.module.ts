import { Module } from '@nestjs/common'
import { ReservationsModule } from './reservations/reservations.module'
import { WorkflowsModule } from './workflows/workflows.module'
import { ActivitiesModule } from './activities/activities.module'
import { TaskrouterService } from './taskrouter.service'
import { ChannelsModule } from './channels/channels.module'
import { TasksModule } from './tasks/tasks.module'
import { TaskrouterController } from './taskrouter.controller'
import { WorkersModule } from './workers/workers.module'
import { TaskModule } from '@/modules/task/task.module'
import { OrderModule } from '@/modules/order/order.module'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
    imports: [
        ReservationsModule,
        WorkflowsModule,
        ActivitiesModule,
        ChannelsModule,
        TasksModule,
        WorkersModule,
        TaskModule,
        OrderModule,
        PrismaModule
    ],
    providers: [TaskrouterService],
    controllers: [TaskrouterController],
})
export class TaskrouterModule { }
