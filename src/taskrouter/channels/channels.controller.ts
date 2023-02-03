import { Controller, Get } from '@nestjs/common';
import { TaskChannel } from '@/types/taskrouter.type'
import { ChannelsService } from './channels.service'

@Controller('taskrouter/channels')
export class ChannelsController {
    constructor(private channelService: ChannelsService) {}

    @Get()
    findAll(): TaskChannel[] {
        return this.channelService.findAll()
    }
}
