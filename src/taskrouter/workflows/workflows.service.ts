import {  Injectable } from '@nestjs/common'
import { Workflow } from '@/types/taskrouter.type'
import { TaskrouterService } from '../taskrouter.service'

@Injectable()
export class WorkflowsService extends TaskrouterService{
    findAll(): Workflow[] {
        return this.twilioTaskrouter.workflows.list()
    }
}
