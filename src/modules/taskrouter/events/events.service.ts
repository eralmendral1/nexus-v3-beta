import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/modules/prisma/prisma.service'

@Injectable()
export class EventsService {
    constructor(private readonly prisma: PrismaService) { }


    createTaskRouterEvent(eventData): void {
        let { Sid, Resource, EventType, EventDescription } = eventData

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
