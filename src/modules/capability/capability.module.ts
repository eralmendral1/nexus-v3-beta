import { Module } from '@nestjs/common'
import { CapabilityService } from './capability.service'
import { CapabilityController } from './capability.controller'
import { PrismaService } from '../prisma/prisma.service'
import { WorkersModule } from '../taskrouter/workers/workers.module'

@Module({
    controllers: [CapabilityController],
    providers: [CapabilityService, PrismaService],
    imports: [WorkersModule]
})
export class CapabilityModule { }
