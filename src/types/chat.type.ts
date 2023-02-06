
import { TwilioResource } from './twilio.type'

export type Conversation = TwilioResource & {
    "chatService": string,
    "messagingServiceSid": string,
    "friendlyName": string,
    "uniqueName": string,
    "attributes": string,
    "state": string,
    "timers": object,
    "links": ConversationLink
}

type ConversationLink = {
    "participants": string,
    "messages": string,
    "webhooks": string
}

export type Message = TwilioResource & {
    "conversationSid": string,
    "index": number,
    "author": string,
    "body": string,
    "media"?: string
    "attributes": string,
    "participantSid"?: string,
    "delivery"?: string
    "contentSid"?: string,
    "links": MessageLink
}

type MessageLink = {
    "delivery_receipts": string
}