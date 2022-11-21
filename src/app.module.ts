import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TwilioModule } from 'nestjs-twilio'
import { PusherModule } from 'nestjs-pusher'
import { PrismaModule } from './prisma/prisma.module';


@Module({
    imports: [
        // Config Module
        ConfigModule.forRoot(),

        // Twilio Module
        TwilioModule.forRoot({
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
        }),

        // Pusher Module
        PusherModule.forRoot({
            key: process.env.PUSHER_APP_KEY,
            appId: process.env.PUSHER_APP_ID,
            secret: process.env.PUSHER_APP_SECRET,
            cluster: process.env.PUSHER_APP_CLUSTER
        }, {
            limit: 4000, //4mb
            enabled: true
        }, true),


    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }
