import { Controller, Post, Put, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { CapabilityService } from './capability.service'
import { AddWorkerCapabilityDto } from './dto/add-worker-capability.dto'
import { RemoveWorkerCapabilityDto } from './dto/remove-worker-capability.dto'
import { UpdateWorkerCapabilityDto } from './dto/update-worker-capability.dto'

@Controller('capability')
export class CapabilityController {
    constructor(private readonly capabilityService: CapabilityService) { }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    addWorkerCapabilities(@Body() addWorkerCapabilityDto: AddWorkerCapabilityDto) {
        return this.capabilityService.addWorkerCapabilities(addWorkerCapabilityDto)
    }

    @Post('remove')
    removeWorkerCapabilities(@Body() removeWorkerCapabilityDto: RemoveWorkerCapabilityDto) {
        return this.capabilityService.removeWorkerCapabilities(removeWorkerCapabilityDto)
    }
}
