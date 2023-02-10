import { Injectable, Inject } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { TaskrouterService } from '../taskrouter/taskrouter.service'
import { AddWorkerCapabilityDto } from './dto/add-worker-capability.dto'
import { TWILIO_TASKROUTER } from '@/modules/twilio/constants'
import { RemoveWorkerCapabilityDto } from './dto/remove-worker-capability.dto'
import { UpdateWorkerCapabilityDto } from './dto/update-worker-capability.dto'
import { WorkersService } from '../taskrouter/workers/workers.service'
import { UpdateWorkerItemsAttributesDto } from '../taskrouter/workers/dto/update-worker-items-attributes.dto'
import { Worker } from '@/types'
import { RemoveWorkerItemsAttributesDto } from '../taskrouter/workers/dto/remove-worker-items-attributes.dto'

@Injectable()
export class CapabilityService extends TaskrouterService {
    constructor(@Inject(TWILIO_TASKROUTER) public readonly twilioTaskrouter, private prisma: PrismaService, private workerService: WorkersService) {
        super(twilioTaskrouter)
    }

    async addWorkerCapabilities({ userId, workerSid, status, itemIds }: AddWorkerCapabilityDto): Promise<Worker> {
        itemIds.forEach(async (id: number) => {
            let capabilityFound = await this.prisma.workerCapability.findFirst({
                where: {
                    worker_id: userId,
                    item_id: id,
                }
            })

            // Create if not found
            if (!capabilityFound) {
                await this.prisma.workerCapability.create({
                    data: {
                        worker_id: userId,
                        item_id: id,
                        status,
                    }
                })
            } else {
                return this.prisma.workerCapability.updateMany({
                    where: {
                        worker_id: userId,
                        item_id: id
                    },
                    data: {
                        status
                    }
                })
            }
        })

        // Update twilio worker item attributes
        let updateWorkerItemsAttributesDto: UpdateWorkerItemsAttributesDto = {
            workerSid,
            items_capable: itemIds,
            items_assigned: status === 'A' ? itemIds : []
        }

        return await this.workerService.updateWorkerItemsAttributes(updateWorkerItemsAttributesDto)
    }

    async removeWorkerCapabilities({ userId, workerSid, itemIds }: RemoveWorkerCapabilityDto): Promise<Worker> {

        // Remove from DB
        itemIds.forEach((id: number) => {
            this.prisma.workerCapability.deleteMany({
                where: {
                    worker_id: userId,
                    item_id: id
                }
            })
        })

        // Remove from worker's twilio attributes.
        let removeWorkerItemsAttributesDto: RemoveWorkerItemsAttributesDto = {
            workerSid,
            itemIds
        }

        return await this.workerService.removeWorkerItemsAttributes(removeWorkerItemsAttributesDto)
    }
}
