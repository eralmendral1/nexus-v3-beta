import { DynamicModule, Module, Provider } from '@nestjs/common';
import { TWILIO_CLIENT } from './constants'


@Module({})
export class TwilioModule {
    static forRoot(accountSid: string, authToken: string, workspace: string): DynamicModule {
       
        const twilioClient = require('twilio')(accountSid, authToken).taskrouter.v1.workspaces(workspace)

        const twilioProvider: Provider = {
            provide:  TWILIO_CLIENT,
            useValue: twilioClient
        }

        return {
            module: TwilioModule,
            providers: [twilioProvider],
            exports: [twilioProvider],
            global: true
        }
    }
}
