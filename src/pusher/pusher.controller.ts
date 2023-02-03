import { Controller, Post, Body } from '@nestjs/common'
import { Request } from 'express'

@Controller('pusher')
export class PusherController {

    @Post('channel-existence')
    handleChannelExistenceCallback(@Body() requestBody: Request) {

    }

    @Post('presence')
    handlePresenceCallback(@Body() requestBody: Request) {

    }

    @Post('client-events')
    handleClientEventsCallback(@Body() requestBody: Request) {

    }

    @Post('subscription-count')
    handleSubscriptionCountCallback() {
        
    }

    @Post('cache-channels')
    handleCacheChannelsEvents() {

    }
}
