import { Inject, Injectable } from '@nestjs/common';
import { TWILIO_TASKROUTER } from '@/modules/twilio/constants'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class TaskrouterService {
    constructor(@Inject(TWILIO_TASKROUTER) public readonly twilioTaskrouter, private prisma: PrismaService) { }

    createTaskRouterEvent(eventData): void {
        let { Sid,  Resource, EventType, EventDescription } = eventData

        this.prisma.taskRouterEvent.create({
            data: {
                sid: Sid,
                resource: Resource,
                event_type: EventType,
                event_description: EventDescription,
                event_data: eventData
            }
        })
    }
}
