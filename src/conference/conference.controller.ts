import { Controller , Get, Param } from '@nestjs/common';
import { ConferenceService } from './conference.service'

@Controller('conference')
export class ConferenceController {
    constructor(private readonly conferenceService: ConferenceService) {}

    @Get(':conferenceSid')
    getConference(@Param() conferenceSid: string) {
        
    }

    getConferenceParticipants() {

    }

    mute() {

    }

    hold () {

    }

    createConferenceParticipant() {

    }

    createConferenceCoach() {

    }
}
