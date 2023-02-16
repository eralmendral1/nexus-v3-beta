import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'
import { TaskService } from '@/modules/task/task.service'
import { OrderService } from '@/modules/order/order.service'

@Controller('taskrouter')
export class TaskrouterController {
    constructor( private taskService: TaskService, private orderService: OrderService) { }

    @Post('callback')
    handleTaskrouterCallback(@Body() eventData: Request) {
        const eventType = eventData['EventType']

        switch (eventType) {

            case 'task.created':

                // Create task record in database.
                this.taskService.createTask(eventData)

                // Create task history record in database.
                
                
                // Update order status to 'T'. Means a task is created for the order.
                this.orderService.taskCreated(eventData)


                // save task to rediss
                // handleSMS
                // broadcast

                break
            case 'task.updated':


                break

            case 'task.canceled':
                //todo create task  completed record.
                break

            case 'task.wrapup':
                break

            case 'task.completed':
                // todo: create task completed record.
                break

            case 'task.deleted':
                break

        }

        return {}
    }

    @Post('error')
    handleTaskrouterError() {
        // todo: log error to db errors table
        // todo: sentry alert
        // todo: slack alert
        return {}
    }
}
