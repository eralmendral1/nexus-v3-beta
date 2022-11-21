import { Injectable } from '@nestjs/common'
import { TwilioService } from 'nestjs-twilio'

@Injectable()
export class AppService {
    public constructor(private readonly twilioService: TwilioService) { }

    async testTwilioSetup(): Promise<any> {
        return this.twilioService.client.messages.create({
            body: "test twilio setup nexus-v3-beta",
            from: "+18187947631",
            to: "+17143644103"
        })
    }
}
