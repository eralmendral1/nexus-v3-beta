import { DynamicModule, Module, Provider } from '@nestjs/common'
import { TWILIO_CLIENT, TWILIO_TASKROUTER, TWILIO_CONVERSATION } from './constants'

@Module({})
export class TwilioModule {
    static forRoot(accountSid: string, authToken: string, workspace: string): DynamicModule {
            
        const twilioClient = require('twilio')(accountSid, authToken)
       
        const twilioClientProvider: Provider = {
            provide: TWILIO_CLIENT,
            useValue: twilioClient
        }

        const twilioTaskrouter = twilioClient.taskrouter.v1.workspaces(workspace)
        const twilioTaskrouterProvider: Provider = {
            provide: TWILIO_TASKROUTER,
            useValue: twilioTaskrouter
        }

        const twilioConversation = twilioClient.conversations.v1
        const twilioConversationProvider: Provider = {
            provide: TWILIO_CONVERSATION,
            useValue: twilioConversation
        }

        return {
            module: TwilioModule,
            providers: [twilioClientProvider, twilioTaskrouterProvider, twilioConversationProvider],
            exports: [twilioClientProvider, twilioTaskrouterProvider, twilioConversationProvider],
            global: true
        }
    }
}
