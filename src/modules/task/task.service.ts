import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/modules/prisma/prisma.service'
import { CreateTaskHistoryDto } from './dto/create-task-history.dto'

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) { }

    async createTask(taskEventData: any) {

        let {
            TaskSid, TaskPriority, TaskAttributes, TaskDateCreated, TimestampMs,
            TaskQueueTargetExpression, TaskQueueSid, TaskQueueName, TaskQueueEnteredDate,
            TaskChannelSid, TaskChannelUniqueName, WorkflowSid, WorkflowName,
            WorkspaceSid, WorkspaceName, AccountSid, ResourceSid,
        } = taskEventData

        let taskExists = await this.prisma.task.findFirst({ where: { task_sid: TaskSid } })

        let data = {
            order_id: JSON.parse(TaskAttributes).OrderID,
            task_sid: TaskSid,
            task_priority: Number(TaskPriority),
            task_attributes: TaskAttributes,
            task_queue_target_exp: TaskQueueTargetExpression,
            task_queue_sid: TaskQueueSid,
            task_queue_name: TaskQueueName,
            task_channel_sid: TaskChannelSid,
            task_channel_unique_name: TaskChannelUniqueName,
            workflow_sid: WorkflowSid,
            workflow_friendly_name: WorkflowName,
            workspace_sid: WorkspaceSid,
            workspace_name: WorkspaceName,
            account_sid: AccountSid,
            resource_sid: ResourceSid,
            task_queue_entered_date: TaskQueueEnteredDate,
            task_created_date: TaskDateCreated,
            timestamp_ms: TimestampMs
        }

        // Create if not exists
        if (!taskExists) return this.prisma.task.create({ data })

        // Update if exists.
        return this.prisma.task.update({ where: { task_sid: TaskSid }, data: { ...data } })
    }


    async createTaskHistory(taskEventData) {
        let {
            TaskSid, TaskPriority, TaskAttributes,
            TaskAssignmentStatus, TaskAge, TaskVersion,
            ResourceType, ResourceSid, Sid,
            EventType, EventDescription,
            Timestamp, TimestampMs
        } = taskEventData

        let attributes = JSON.parse(TaskAttributes)
        let order_id = attributes.OrderID
        let item_id = attributes.ItemID

        // If task not exists, create first.
        let taskExists = await this.prisma.task.findFirst({ where: { task_sid: TaskSid } })
        if (!taskExists) {
            await this.createTask(taskEventData)
        }

        let taskHistoryData: CreateTaskHistoryDto = {
            sid: Sid,
            order_id,
            item_id,
            event_type: EventType,
            event_description: EventDescription,
            task_sid: TaskSid,
            task_priority: Number(TaskPriority),
            task_attributes: TaskAttributes,
            task_assignment_status: TaskAssignmentStatus,
            task_age: Number(TaskAge),
            task_version: TaskVersion,
            resource_type: ResourceType,
            resource_sid: ResourceSid,
            timestamp: Timestamp,
            timestamp_ms: TimestampMs
        }

        if (ResourceType === 'reservation') {
            let { ReservationSid, ReservationVersion } = taskEventData
            taskHistoryData['reservation_sid'] = ReservationSid
            taskHistoryData['reservation_version'] = ReservationVersion
        }

        if (taskEventData.hasOwnProperty('WorkerSid')) {
            let { WorkerSid, WorkerName, WorkerVersion, WorkerActivityName, WorkerAttributes } = taskEventData
            taskHistoryData['worker_sid'] = WorkerSid
            taskHistoryData['worker_name'] = WorkerName
            taskHistoryData['worker_version'] = WorkerVersion
            taskHistoryData['worker_activity_name'] = WorkerActivityName
            taskHistoryData['worker_attributes'] = WorkerAttributes
        }

        return this.prisma.taskHistory.create({ data: taskHistoryData })
    }


    async completeTask(taskEventData: any) {

        let  { TaskSid } = taskEventData

        let taskCompletion = await this.prisma.taskCompletions.findFirst({ where : { task_sid: TaskSid }})
        if(taskCompletion) return

        

    }
}
