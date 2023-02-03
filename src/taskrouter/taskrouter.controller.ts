import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'

@Controller('taskrouter')
export class TaskrouterController {
    @Post('callback')
    handleTaskrouterCallback(@Body() request: Request) {
        console.log('debug request body:', request)
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
