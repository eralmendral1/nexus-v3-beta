import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TwilioModule } from 'nestjs-twilio'
import { PusherModule } from 'nestjs-pusher'
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { PassportModule } from '@nestjs/passport'
import { AzureADStrategy } from './azure-ad.guard'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { PolicyCategoriesModule } from './policy-categories/policy-categories.module';
import { PoliciesModule } from './policies/policies.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
    imports: [
        // Config Module
        ConfigModule.forRoot({ isGlobal: true }),
        
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

        PrismaModule,
        PassportModule,
        AuthModule,
        
        ClientsModule,
        UsersModule,
        ItemsModule,
        PolicyCategoriesModule,
        PoliciesModule,
        ContactsModule
    ],
    controllers: [AppController],
    providers: [AppService, AzureADStrategy],
})

export class AppModule { }
