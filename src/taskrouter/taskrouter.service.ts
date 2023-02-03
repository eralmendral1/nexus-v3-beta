import { Inject, Injectable } from '@nestjs/common';
import { TWILIO_CLIENT } from '@/twilio/constants'

@Injectable()
export class TaskrouterService {
    constructor(@Inject(TWILIO_CLIENT) public readonly twilioClient) { }
}
