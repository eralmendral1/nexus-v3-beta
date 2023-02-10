import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { Worker } from '@/types'
import { WorkersService } from './workers.service'
import { UpdateWorkerActivityDto } from './dto/update-worker-activity.dto'

@Controller('taskrouter/workers')
export class WorkersController {

    constructor(private readonly workerService: WorkersService) { }

    @Get()
    getWorkers(): Worker[] {
        return this.workerService.getWorkers()
    }


    @Get(':workerSid')
    getWorker(@Param() params): Worker {
        return this.workerService.getWorker(params.workerSid)
    }


    @Post('activity')
    updateActivity(@Body() updateWorkerActivityDto: UpdateWorkerActivityDto): Worker {
        return this.workerService.updateWorkerActivity(updateWorkerActivityDto)
    }
}
