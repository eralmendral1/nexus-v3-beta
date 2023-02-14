import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PusherModule as NestPusher } from 'nestjs-pusher'
import { PrismaModule } from './modules/prisma/prisma.module'
import { ClientsModule } from './modules/clients/clients.module'
import { PassportModule } from '@nestjs/passport'
import { AzureADStrategy } from './azure-ad.guard'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { ItemsModule } from './modules/items/items.module'
import { PolicyCategoriesModule } from './modules/policy-categories/policy-categories.module'
import { PoliciesModule } from './modules/policies/policies.module'
import { ContactsModule } from './modules/contacts/contacts.module'
import { DestinationNumbersModule } from './modules/destination-numbers/destination-numbers.module'
import { TaskrouterModule } from './modules/taskrouter/taskrouter.module'
import { TwilioModule } from './modules/twilio/twilio.module'
import { ChatModule } from './modules/chat/chat.module'
import { PusherModule } from './modules/pusher/pusher.module'
import { CapabilityModule } from './modules/capability/capability.module'
import { TrackersModule } from './modules/trackers/trackers.module'
import { WidgetsModule } from './modules/widgets/widgets.module'
import { ConferenceModule } from './modules/conference/conference.module'
import { OrderModule } from './modules/order/order.module'
import { TaskModule } from './modules/task/task.module'
import { AppController } from './app/app.controller';

@Module({
    imports: [
        // Config Module
        ConfigModule.forRoot({ isGlobal: true }),
        EventEmitterModule.forRoot(),

        // Pusher Module
        NestPusher.forRoot({
            key: process.env.PUSHER_APP_KEY,
            appId: process.env.PUSHER_APP_ID,
            secret: process.env.PUSHER_APP_SECRET,
            cluster: process.env.PUSHER_APP_CLUSTER
        }, {
            limit: 4000, //4mb
            enabled: true
        }, true),
        PrismaModule,
        PassportModule,
        AuthModule,
        ClientsModule,
        UsersModule,
        ItemsModule,
        PolicyCategoriesModule,
        PoliciesModule,
        ContactsModule,
        DestinationNumbersModule,
        TaskrouterModule,
        TwilioModule.forRoot(process.env.TWILIO_ACCOUNT_SID, process.env.TWILO_AUTH_TOKEN, process.env.TWILIO_WORKSPACE_SID),
        ChatModule,
        PusherModule,
        CapabilityModule,
        TrackersModule,
        WidgetsModule,
        ConferenceModule,
        OrderModule,
        TaskModule
    ],
    providers: [AzureADStrategy],
    controllers: [AppController],
})

export class AppModule { }
