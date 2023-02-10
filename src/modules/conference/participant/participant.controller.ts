import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common'
import { TWILIO_CLIENT } from '@/modules/twilio/constants'
import { Participant } from '@/types/conference.type'
import { HoldParticipantDto } from './dto/hold-participant.dto'
import { MuteParticipantDto } from './dto/mute-participant.dto'
import { CoachParticipantDto } from './dto/coach-participant.dto'
import { CreateParticipantDto } from './dto/create-participant.dto'

@Controller('conference')
export class ParticipantController {
    constructor(@Inject(TWILIO_CLIENT) private readonly twilioClient) { }

    @Get(':conferenceSid/participants')
    getConferenceParticipants(@Param('conferenceSid') conferenceSid: string): Participant {
        return this.twilioClient.conferences(conferenceSid).participants.list()
    }

    @Get(':conferenceSid/participants/:participantId')
    getConferenceParticipant(@Param('conferenceSid') conferenceSid: string, @Param('participantId') participantid: string): Participant {
        return this.twilioClient.conferences(conferenceSid).participants(participantid).fetch()
    }

    @Post('participant/create')
    createParticipant(@Body() { conferenceSid, from, participantSid, startConferenceOnEnter, endConferenceOnExit }: CreateParticipantDto): Participant {
        return this.twilioClient.conferences(conferenceSid).participants.create({
            from,
            to: `client:${participantSid}`,
            label: participantSid,
            startConferenceOnEnter,
            endConferenceOnExit
        })
    }

    @Post('participant/hold')
    holdParticipant(@Body() { conferenceSid, participantSid, hold }: HoldParticipantDto): Participant {
        return this.twilioClient.conferences(conferenceSid).participants(participantSid).update({ hold })
    }

    @Post('participant/mute')
    muteParticipant(@Body() { conferenceSid, participantSid, muted }: MuteParticipantDto) {
        return this.twilioClient.conferences(conferenceSid).participants(participantSid).update({ muted })
    }

    @Post('participant/coach')
    coachParticipant(@Body() { conferenceSid, callSidToCoach, agentSid, coachSid }: CoachParticipantDto) {
        return this.twilioClient.conferences(conferenceSid).participants.create({
            from: `client:${agentSid}`,
            to: `client:${coachSid}`,
            label: `coach:${coachSid}`,
            callSidToCoach: callSidToCoach,
            coaching: true,
            record: true,
            muted: true,
            beep: false
        })

    }
}
