import { Module } from '@nestjs/common'
import { ReservationsModule } from './reservations/reservations.module'
import { WorkflowsModule } from './workflows/workflows.module'
import { ActivitiesModule } from './activities/activities.module';
import { TaskrouterService } from './taskrouter.service';

@Module({
    imports: [ReservationsModule, WorkflowsModule, ActivitiesModule],
    providers: [TaskrouterService]
})
export class TaskrouterModule { }
