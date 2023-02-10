import { Inject, Injectable } from '@nestjs/common';
import { TWILIO_TASKROUTER } from '@/modules/twilio/constants'

@Injectable()
export class TaskrouterService {
    constructor(@Inject(TWILIO_TASKROUTER) public readonly twilioTaskrouter) { }
}
