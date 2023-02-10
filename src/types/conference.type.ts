import { TwilioResourceApiVersion, TwilioResource } from './twilio.type'

export type Conference = TwilioResourceApiVersion & {
    "friendlyName": string,
    "region": string,
    "status": string,
    "subresourceUris": ConferenceSubresourceUri,
    "reasonConferenceEnded": string,
    "callSidEndingConference": string
}

type ConferenceSubresourceUri = {
    "participants": string,
    "recordings": string
}

export type Participant = TwilioResource & {
    "callSid": string,
    "label": string,
    "callSidToCoach"?: string,
    "coaching": boolean,
    "conferenceSid": string,
    "endConferenceOnExit": boolean,
    "muted": boolean,
    "hold": boolean,
    "startConferenceOnEnter": boolean,
    "status": string,
    "uri": string
}

