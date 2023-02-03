import { Controller, Get } from '@nestjs/common';
import { Activity } from '@/types/taskrouter.type'
import { ActivitiesService } from './activities.service'

@Controller('taskrouter/activities')
export class ActivitiesController {
    constructor(private readonly activityService: ActivitiesService) {}

    @Get()
    findAll() : Activity[] {
        return this.activityService.findAll()
    }
}
