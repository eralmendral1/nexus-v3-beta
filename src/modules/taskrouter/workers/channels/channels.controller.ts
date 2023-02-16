import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { WorkerChannel } from '@/types'
import { ChannelsService } from './channels.service'
import { UpdateWorkerChannelCapacityDto } from './dto/update-worker-channel-capacity.dto'
import { UpdateWorkerChannelAvailabilityDto } from './dto/update-worker-channel-availability.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("TaskRouter Worker Channel Resource")
@Controller('taskrouter/workers/channels')
export class ChannelsController {
    constructor(private readonly channelsService: ChannelsService) { }

    @Get(':workerSid')
    getWorkerChannels(@Param() params): WorkerChannel[] {
        return this.channelsService.getWorkerChannels(params.workerSid)
    }


    @Post('availability')
    updateWorkerChannelAvailability(@Body() updateWorkerChannelAvailabilityDto: UpdateWorkerChannelAvailabilityDto): WorkerChannel {
        return this.channelsService.updateWorkerChannelAvailability(updateWorkerChannelAvailabilityDto)
    }


    @Post('capacity')
    updateWorkerChannelCapacity(@Body() updateWorkerChannelCapacityDto: UpdateWorkerChannelCapacityDto): WorkerChannel {
        return this.channelsService.updateWorkerChannelCapacity(updateWorkerChannelCapacityDto)
    }
}
