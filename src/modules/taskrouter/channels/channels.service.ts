import { Injectable } from '@nestjs/common';
import { TaskChannel } from '@/types/taskrouter.type'
import { TaskrouterService } from '../taskrouter.service'

@Injectable()
export class ChannelsService extends TaskrouterService{

    findAll(): TaskChannel[] {
        return this.twilioTaskrouter.taskChannels.list()
    }
}
