import { Controller, Get, Param } from '@nestjs/common'
import { Conversation, Message } from '../types'
import { ChatService } from './chat.service'

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) { }

    @Get(':conversationSid')
    getConversation(@Param('conversationSid') conversationSid: string): Conversation {
        return this.chatService.twilioConversation.conversations(conversationSid).fetch()
    }

    @Get(':conversationSid/messages')
    getConversationMessages(@Param('conversationSid') conversationSid: string): Message[] {
        return this.chatService.twilioConversation.conversations(conversationSid).messages.list()
    }

    @Get(':conversationSid/messages/:messageSid')
    getConversationsMessage(@Param('conversationSid') conversationSid: string, @Param('messageSid') messageSid: string): Message {
        return this.chatService.twilioConversation.conversations(conversationSid).messages(messageSid).fetch()
    }
}
