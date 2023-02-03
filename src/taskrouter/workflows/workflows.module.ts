import { Module } from '@nestjs/common'
import { WorkflowsService } from './workflows.service'
import { WorkflowsController } from './workflows.controller'

@Module({
    imports: [ ],
    providers: [WorkflowsService],
    controllers: [WorkflowsController]
})
export class WorkflowsModule { }
