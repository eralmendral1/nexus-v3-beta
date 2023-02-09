import { DynamicModule, Module, Provider } from '@nestjs/common'
import { TWILIO_TASKROUTER, TWILIO_CONVERSATION } from './constants'

@Module({})
export class TwilioModule {
    static forRoot(accountSid: string, authToken: string, workspace: string): DynamicModule {
        
        const twilioTaskrouter = require('twilio')(accountSid, authToken).taskrouter.v1.workspaces(workspace)

        const twilioProvider: Provider = {
            provide: TWILIO_TASKROUTER,
            useValue: twilioTaskrouter
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
