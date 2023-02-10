import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'

@Controller('taskrouter')
export class TaskrouterController {
    @Post('callback')
    handleTaskrouterCallback(@Body() request: Request) {
        console.log('debug request body:', request)

        const eventType = request['EventType']

        switch (eventType) {
            case 'task.created':
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
