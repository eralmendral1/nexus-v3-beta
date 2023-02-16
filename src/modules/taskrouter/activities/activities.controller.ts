import { Controller, Get } from '@nestjs/common';
import { Activity } from '@/types/taskrouter.type'
import { ActivitiesService } from './activities.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("TaskRouter Activity Resource")
@Controller('taskrouter/activities')
export class ActivitiesController {
    constructor(private readonly activityService: ActivitiesService) {}

    @Get()
    findAll() : Activity[] {
        return this.activityService.findAll()
    }
}
