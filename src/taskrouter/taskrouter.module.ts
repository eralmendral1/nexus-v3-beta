import { Module } from '@nestjs/common'
import { ReservationsModule } from './reservations/reservations.module'
import { WorkflowsModule } from './workflows/workflows.module'
import { ActivitiesModule } from './activities/activities.module';
import { TaskrouterService } from './taskrouter.service';
import { ChannelsModule } from './channels/channels.module';

@Module({
    imports: [ReservationsModule, WorkflowsModule, ActivitiesModule, ChannelsModule],
    providers: [TaskrouterService]
})
export class TaskrouterModule { }
