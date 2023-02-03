import { Module } from '@nestjs/common'
import { ReservationsModule } from './reservations/reservations.module'
import { WorkflowsModule } from './workflows/workflows.module'
import { ActivitiesModule } from './activities/activities.module'
import { TaskrouterService } from './taskrouter.service'
import { ChannelsModule } from './channels/channels.module'
import { TasksModule } from './tasks/tasks.module'
import { TaskrouterController } from './taskrouter.controller'
import { WorkersModule } from './workers/workers.module'

@Module({
    imports: [
        ReservationsModule,
        WorkflowsModule,
        ActivitiesModule,
        ChannelsModule,
        TasksModule,
        WorkersModule
    ],
    providers: [TaskrouterService],
    controllers: [TaskrouterController]
})
export class TaskrouterModule { }
