import { Injectable } from '@nestjs/common'
import { TaskrouterService } from '../taskrouter.service'
import { Worker } from '@/types'
import { UpdateWorkerActivityDto } from './dto/update-worker-activity.dto'
import { UpdateWorkerItemsAttributesDto } from './dto/update-worker-items-attributes.dto'
import { RemoveWorkerItemsAttributesDto } from './dto/remove-worker-items-attributes.dto'

@Injectable()
export class WorkersService extends TaskrouterService {

    getWorkers(): Worker[] {
        return this.twilioTaskrouter.workers.list()
    }


    getWorker(workerSid: string): Worker {
        return this.twilioTaskrouter.workers(workerSid).fetch()
    }


    updateWorkerActivity({ workerSid, activitySid }: UpdateWorkerActivityDto): Worker {
        return this.twilioTaskrouter.workers(workerSid).update({
            activitySid
        })
    }

    async updateWorkerItemsAttributes({ workerSid, items_capable, items_assigned }: UpdateWorkerItemsAttributesDto): Promise<Worker> {
        const worker = await this.twilioTaskrouter.workers(workerSid).fetch()
        let workerAttributes = JSON.parse(worker.attributes)

        // Items Capable
        let itemsCapableAttribute = workerAttributes.items_capable ?? []
        items_capable.some((id: number) => {
            if (itemsCapableAttribute.indexOf(id) === -1) {
                itemsCapableAttribute.push(id)
            }
        })
        itemsCapableAttribute.sort((a, b) => a - b)

        // Item Assigned
        let itemsAssignedAttribute = workerAttributes.items_assigned ?? []
        items_assigned.some((id: number) => {
            if (itemsAssignedAttribute.indexOf(id) === -1) {
                itemsAssignedAttribute.push(id)
            }
        })
        itemsAssignedAttribute.sort((a, b) => a - b)


        let workerUpdatedAttributes = {
            ...workerAttributes,
            items_assigned: itemsAssignedAttribute,
            items_capable: itemsCapableAttribute
        }

        return this.twilioTaskrouter.workers(workerSid).update({
            attributes: JSON.stringify(workerUpdatedAttributes)
        })
    }

    async removeWorkerItemsAttributes({ workerSid, itemIds }: RemoveWorkerItemsAttributesDto): Promise<Worker> {
        const worker = await this.twilioTaskrouter.workers(workerSid).fetch()
        let workerAttributes = JSON.parse(worker.attributes)

        // Items Capable
        let itemsCapableAttribute = workerAttributes.items_capable ?? []
        itemsCapableAttribute =  itemsCapableAttribute.filter((id: number) => itemIds.indexOf(id) < 0)

        // Item Assigned
        let itemsAssignedAttribute = workerAttributes.items_assigned ?? []
        itemsAssignedAttribute = itemsAssignedAttribute.filter((id: number) => itemIds.indexOf(id) < 0)

        let workerUpdatedAttributes = {
            ...workerAttributes,
            items_assigned: itemsAssignedAttribute,
            items_capable: itemsCapableAttribute
        }

        return this.twilioTaskrouter.workers(workerSid).update({
            attributes: JSON.stringify(workerUpdatedAttributes)
        })
    }
}
