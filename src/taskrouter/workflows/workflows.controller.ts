import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { WorkflowsService } from './workflows.service'


@ApiTags('Taskrouter Workflows')
@Controller('taskrouter/workflows')
export class WorkflowsController {
    constructor(private readonly workflowService: WorkflowsService) { }

    @Get()
    findAll() {
       return this.workflowService.findAll()
    }
}
