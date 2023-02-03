import { Controller, Get, Param } from '@nestjs/common';
import { WorkerStatistic } from '@/types'
import { StatisticsService } from './statistics.service'

@Controller('taskrouter/workers/statistics')
export class StatisticsController {
    constructor(private readonly statisticService: StatisticsService) {}

    @Get(':workerSid')
    getWorkerStatitics(@Param() params): WorkerStatistic {
       return this.statisticService.getWorkerStatistics(params.workerSid)
    }
}
