import { Controller, Post, Body, Req, Res, } from '@nestjs/common'
import { Request, Response } from 'express'
import { PusherService } from 'nestjs-pusher'

@Controller('pusher')
export class PusherController {
    constructor(private readonly pusherService: PusherService) { }

    @Post('channel-existence')
    handleChannelExistenceCallback(@Body() requestBody: Request) {

    }

    @Post('presence')
    handlePresenceCallback(@Body() requestBody: Request) {
        return 1
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

    // **************************** AUTH ENDPOINTS *********************//

    // handle jwt guard token
    @Post('auth/user')
    pusherUserAuth(@Req() req: Request, @Res() res: Response) {
        const socketId = req.body.socket_id

        const user = {
            user_id: "1",
            user_info: {
                name: "Neo Anderson"
            }
        }

        const authResponse = this.pusherService.authenticate(socketId, 'nexus-channel', user)
        res.send(authResponse)
    }

    @Post('auth/channel')
    // pusherChannelAuth() {
    pusherChannelAuth(@Req() req: Request, @Res() res: Response) {
        const socketId = req.body.socket_id
        console.log("🚀 ~ file: pusher.controller.ts:56 ~ pusherChannelAuth ~ socketId", socketId)
        const channel = req.body.channel_name
        console.log("🚀 ~ file: pusher.controller.ts:57 ~ pusherChannelAuth ~ channel", channel)

        // handle jwt guard token
        const pusher = this.pusherService.getPusherInstance()
        console.log("🚀 ~ file: pusher.controller.ts:60 ~ pusherChannelAuth ~ pusher", pusher)
        const authResponse = pusher.authorizeChannel(socketId, channel)

        res.send(authResponse)
    }
}
