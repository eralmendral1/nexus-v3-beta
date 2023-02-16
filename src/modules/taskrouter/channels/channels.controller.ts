import { Controller, Get } from '@nestjs/common';
import { TaskChannel } from '@/types/taskrouter.type'
import { ChannelsService } from './channels.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags("TaskRouter Task Channels")
@Controller('taskrouter/channels')
export class ChannelsController {
    constructor(private channelService: ChannelsService) {}

    @Get()
    findAll(): TaskChannel[] {
        return this.channelService.findAll()
    }
}
