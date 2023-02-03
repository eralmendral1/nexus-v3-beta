import { Injectable } from '@nestjs/common'
import { TaskrouterService } from '../taskrouter.service'
import { Worker } from '@/types'
import { UpdateWorkerActivityDto } from './dto/update-worker-activity.dto'

@Injectable()
export class WorkersService extends TaskrouterService {

    getWorkers(): Worker[] {
        return this.twilioClient.workers.list()
    }


    getWorker(workerSid: string): Worker {
        return this.twilioClient.workers(workerSid).fetch()
    }


    updateWorkerActivity({ workerSid, activitySid }: UpdateWorkerActivityDto): Worker {
        return this.twilioClient.workers(workerSid).update({
            activitySid
        })
    }
}
