import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TwilioModule } from 'nestjs-twilio';

@Module({
    imports: [ConfigModule.forRoot(),
        TwilioModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (cfg: ConfigService) => ({
                accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
                authToken:  cfg.get('TWILIO_AUTH_TOKEN')
            }),
            inject: [ConfigService]
          }),
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }
