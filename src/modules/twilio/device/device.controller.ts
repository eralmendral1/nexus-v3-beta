import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { CapabilityTokenDto } from './dto/capability-token.dto'
const ClientCapability = require('twilio').jwt.ClientCapability;

@ApiTags("Twilio Device")
@Controller('device')
export class DeviceController {

    @Post('token') 
    token(@Body() { workerSid, ttl} : CapabilityTokenDto ) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;

        const capability = new ClientCapability({
            accountSid,
            authToken
        })

        // todo:  capability.addScope( new ClientCapability.OutgoingClientScope({ applicationSid: appSid })    );
        capability.addScope(new ClientCapability.IncomingClientScope(workerSid))

        return capability.generate(ttl)
    }
}
