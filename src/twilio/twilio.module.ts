import { DynamicModule, Module, Provider } from '@nestjs/common'
import { TWILIO_CLIENT, TWILIO_CONVERSATION } from './constants'

@Module({})
export class TwilioModule {
    static forRoot(accountSid: string, authToken: string, workspace: string): DynamicModule {
        const twilioClient = require('twilio')(accountSid, authToken).taskrouter.v1.workspaces(workspace)

        const twilioProvider: Provider = {
            provide: TWILIO_CLIENT,
            useValue: twilioClient
        }

        const twilioConversation = require('twilio')(accountSid, authToken).conversations.v1

        const twilioConversationProvider: Provider = {
            provide: TWILIO_CONVERSATION,
            useValue: twilioConversation
        }


        return {
            module: TwilioModule,
            providers: [twilioProvider, twilioConversationProvider],
            exports: [twilioProvider, twilioConversationProvider],
            global: true
        }
    }
}
