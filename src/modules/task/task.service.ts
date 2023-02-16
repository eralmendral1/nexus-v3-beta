import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/modules/prisma/prisma.service'

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
}
