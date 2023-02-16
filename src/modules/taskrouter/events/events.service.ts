import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/modules/prisma/prisma.service'

@Injectable()
export class EventsService {
    constructor(private readonly prisma: PrismaService) { }

    async createTaskRouterEvent(eventData): Promise<void> {
        let { Sid, Resource, EventType, EventDescription } = eventData

        let event = await this.prisma.taskRouterEvent.create({
            data: {
                sid: Sid,
                resource: Resource,
                event_type: EventType,
                event_description: EventDescription,
                event_data: JSON.stringify(eventData)
            }
        })

        console.log('taskrouter event created:', event)
    }
}
