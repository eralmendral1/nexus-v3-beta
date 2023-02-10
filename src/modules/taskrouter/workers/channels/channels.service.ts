import { Injectable } from '@nestjs/common'
import { TaskrouterService } from '@/modules/taskrouter/taskrouter.service'
import { WorkerChannel } from '@/types'
import { UpdateWorkerChannelCapacityDto } from './dto/update-worker-channel-capacity.dto'
import { UpdateWorkerChannelAvailabilityDto } from './dto/update-worker-channel-availability.dto'

@Injectable()
export class ChannelsService extends TaskrouterService {

    getWorkerChannels(workerSid: string): WorkerChannel[] {
        return this.twilioTaskrouter.workers(workerSid).workerChannels.list()
    }


    updateWorkerChannelAvailability({ channelSid, workerSid, available }: UpdateWorkerChannelAvailabilityDto): WorkerChannel {
        return this.twilioTaskrouter.workers(workerSid).workerChannels(channelSid).update({ available })
    }


    updateWorkerChannelCapacity({ channelSid, workerSid, capacity }: UpdateWorkerChannelCapacityDto): WorkerChannel {
        return this.twilioTaskrouter.workers(workerSid).workerChannels(channelSid).update({ capacity })
    }
}
