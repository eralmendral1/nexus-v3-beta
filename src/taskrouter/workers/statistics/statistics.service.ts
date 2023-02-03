import { Injectable } from '@nestjs/common';
import { WorkerStatistic } from '@/types'
import { TaskrouterService } from '../../taskrouter.service'


@Injectable()
export class StatisticsService extends TaskrouterService {
    getWorkerStatistics(workerSid: string): WorkerStatistic {
        return this.twilioClient.workers(workerSid).statistics().fetch()
    }
}
