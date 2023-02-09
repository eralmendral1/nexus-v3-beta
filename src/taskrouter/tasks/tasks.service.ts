import { Injectable } from '@nestjs/common'
import { Reservation, Task } from '@/types/taskrouter.type'
import { TaskrouterService } from '../taskrouter.service'
import { UpdateTaskStatusDto } from './dto/updateTaskStatus.dto'

@Injectable()
export class TasksService extends TaskrouterService {

    getAllPendingTasks(): Task[] {
        return this.twilioTaskrouter.tasks.list({ assignmentStatus: "pending" })
    }

    private evaluateTaskAttributeFromItems(): string {
        const workerSid = 'WK77b37617f41db2cdd2e4014f41d08055'
        let attributes = ""

        let myItemIdCapabilities = [1, 2, 10, 11]
        if (myItemIdCapabilities.length) {
            myItemIdCapabilities.forEach((itemId: number, index: number) => {
                attributes += `ItemID = ${itemId}`

                // Append or if not end of attribute string.
                if (index != myItemIdCapabilities.length - 1) {
                    attributes += ` OR `
                }
            })
        }

        return attributes
    }


    getMyPendingTasks(): Task[] {
        return this.twilioTaskrouter.tasks.list({
            assignmentStatus: "pending",
            evaluateTaskAttributes: this.evaluateTaskAttributeFromItems()
        })
    }


    getMyReservedTasks(): Task[] {
        return this.twilioTaskrouter.tasks.list({
            assignmentStatus: "reserved",
            evaluateTaskAttributes: this.evaluateTaskAttributeFromItems()
        })
    }

    getTaskReservations(taskSid: string): Reservation[] {
        return this.twilioTaskrouter.tasks(taskSid).reservations.list()
    }

    getTask(taskSid: string): Task {
        return this.twilioTaskrouter.tasks(taskSid).fetch()
    }

    updateTaskStatus(updateTaskStatusDto: UpdateTaskStatusDto): Task {
        return this.twilioTaskrouter.tasks(updateTaskStatusDto.taskSid).update({ assignmentStatus: updateTaskStatusDto.assignmentStatus })
    }
}
