import { Controller, Get, Param, Inject } from '@nestjs/common'
import { TWILIO_CLIENT } from '../twilio/constants'
import { Conference } from '@/types/conference.type'

@Controller('conference')
export class ConferenceController {
    constructor(@Inject(TWILIO_CLIENT) private readonly twilioClient) { }

    @Get(':conferenceSid')
    getConference(@Param('conferenceSid') conferenceSid: string): Conference {
        return this.twilioClient.conferences(conferenceSid).fetch()
    }
}
