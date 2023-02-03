import { Injectable } from '@nestjs/common';
import { Activity } from '@/types/taskrouter.type'
import { TaskrouterService } from '../taskrouter.service'

@Injectable()
export class ActivitiesService extends TaskrouterService {
    findAll(): Activity[] {
        return this.twilioClient.activities.list()
    }
}