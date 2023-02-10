import { Controller , Post, Body} from '@nestjs/common';

@Controller('call')
export class StatusController {
    
    @Post('status') 
    status(@Body() eventData : any) {
        let eventType = eventData.EventType

        switch(eventType){
            case 'conference-start':
                // handle conference start
                break;

            case 'conference-end':
                // handle conference end
                break;
            case 'completed':
                // handle completed event
                break;
            case 'busy':
            case 'canceled':
            case 'failed':
            case 'no-answer':
                // handle 
                break;
            case 'set-presence':
                // handle set presence
                break;
                
        }
    }
    
    
    // capture event
}
