import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PusherModule as NestPusher } from 'nestjs-pusher'
import { PrismaModule } from './prisma/prisma.module'
import { ClientsModule } from './clients/clients.module'
import { PassportModule } from '@nestjs/passport'
import { AzureADStrategy } from './azure-ad.guard'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ItemsModule } from './items/items.module'
import { PolicyCategoriesModule } from './policy-categories/policy-categories.module'
import { PoliciesModule } from './policies/policies.module'
import { ContactsModule } from './contacts/contacts.module'
import { DestinationNumbersModule } from './destination-numbers/destination-numbers.module'
import { TaskrouterModule } from './taskrouter/taskrouter.module';
import { TwilioModule } from './twilio/twilio.module'
import { TasksModule } from './tasks/tasks.module';
import { ChatModule } from './chat/chat.module';
import { PusherModule } from './pusher/pusher.module';
import { CapabilityModule } from './capability/capability.module';

@Module({
    imports: [
        // Config Module
        ConfigModule.forRoot({ isGlobal: true }),

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

        TasksModule,

        ChatModule,

        PusherModule,

        CapabilityModule
    ],
    providers: [ AzureADStrategy],
})

export class AppModule { }
