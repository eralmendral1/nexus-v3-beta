import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'
import { TaskService } from '@/modules/task/task.service'
import { OrderService } from '@/modules/order/order.service'
import { TaskrouterService } from './taskrouter.service'
import { PrismaService } from '../prisma/prisma.service'
import { EventsService } from './events/events.service'

@Controller('taskrouter')
export class TaskrouterController {
    constructor(private readonly taskService: TaskService, private readonly orderService: OrderService, private eventsService: EventsService) { }

    @Post('callback')
    handleTaskrouterCallback(@Body() eventData: Request) {
        const eventType = eventData['EventType']

        switch (eventType) {
            // ***************************  TASK RESOURCE ******************************** //

            case 'task.created':

                // Create task record in database.
                this.taskService.createTask(eventData)

                // Create task history record in database.
                this.taskService.createTaskHistory(eventData)

                // Update order status to 'T'. Means a task is created for the order.
                this.orderService.updateOrderStatus(eventData, 'T')

                // Todo: Redis | SMS | Braadcast

                break
            case 'task.updated':
                this.taskService.createTaskHistory(eventData)

                // TODO: Broadcast
                break

            case 'task.wrapup':
                this.taskService.createTaskHistory(eventData)
                break

            case 'task.completed':
                this.taskService.createTaskHistory(eventData)

                this.taskService.completeTask(eventData)

                this.orderService.checkNextOrder(eventData)

                // Todo: Redis complete | Voice Hangup | Broadcast (task.completed)

                break


            case 'task.canceled':
                this.taskService.createTaskHistory(eventData)

                this.orderService.updateOrderStatus(eventData, 'A')

                // Todo:  Task completion

                // Todo: Redis remove | Voice Hangup | Broadcast (task.canceled)
                break

            case 'task.deleted':
                this.orderService.updateOrderStatus(eventData, 'DELETED')

                // Todo: Redis remove | Voice Hangup | Broadcast (task.deleted)
                break

            // ***************************  END TASK RESOURCE ******************************** //

            // ***************************  RESERVATION RESOURCE ******************************** //
            case 'reservation.created':
                break
            case 'reservation.accepted':
                break
            case 'reservation.timeout':
            case 'reservation.rescinded':
            case 'reservation.rejected':
                break

            // ***************************  END RESERVATION RESOURCE ******************************** //


            case 'worker.activity.update':
                // broadcast to worker specific

                // broadcast to whole

                break
        }

        // todo: handle passthrough data
        // <add code here>

        this.eventsService.createTaskRouterEvent(eventData)

        return 'callback test'
    }

    @Post('error')
    handleTaskrouterError() {
        // todo: log error to db errors table
        // todo: sentry alert
        // todo: slack alert
        return {}
    }


    
}
