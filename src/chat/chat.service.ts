import { Inject, Injectable } from '@nestjs/common'
import { TWILIO_CONVERSATION } from '@/twilio/constants'

@Injectable()
export class ChatService {
    constructor(@Inject(TWILIO_CONVERSATION) public readonly twilioConversation) { }
}
