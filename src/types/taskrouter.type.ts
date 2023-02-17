import { TwilioResource } from './twilio.type'

export type TaskRouterResource = TwilioResource & {
    "workspaceSid": string
}

export type LinkWorkspace = {
    "workspace": string
}

export type Workflow = {
    "accountSid": string,
    "assignmentCallbackUrl"?: string,
    "configuration": string,
    "dateCreated": string,
    "dateUpdated": string,
    "fallbackAssignmentCallbackUrl": string,
    "friendlyName": string,
    "sid": string,
    "taskReservationTimeout": number,
    "workspaceSid": string,
    "url": string,
    "links": WorkflowLinks
}

export type WorkflowLinks = {
    "cumulative_statistics": string,
    "real_time_statistics": string,
    "statistics": string
}


export type Activity = {
    "accountSid": string,
    "available": boolean,
    "dateCreated": string,
    "dateUpdated": string,
    "friendlyName": string,
    "sid": string,
    "workspaceSid": string,
    "url": string,
    "links": ActivityLinks
}

export type ActivityLinks = {
    "workspace": string
}

export type TaskChannel = TaskRouterResource & {
    "friendlyName": string,
    "uniqueName": string,
    "channelOptimizedRouting": boolean,
    "url" : string,
    "links": LinkWorkspace
}

export type Reservation = TaskRouterResource & {
    "reservationStatus": string,
    "taskSid": string,
    "workerName": string,
    "workerSid": string,
    "url" : string,
    "links": ReservationLinks
}

type ReservationLinks = {
    "task": string,
    "worker": string,
    "workspace": string
}

export type Task = TaskRouterResource & {
    "age": number,
    "assignmenStatus": string,
    "attributes": string,
    "addons": string,
    "taskQueueEnteredDate": string,
    "priority": number,
    "reason"?: string,
    "taskQueueSid": string,
    "taskQueueFriendlyName": string,
    "taskChannelSid": string,
    "taskChannelUniqueName": string,
    "timeout": number,
    "workflowSid": string,
    "workflowFriendlyName": string,
    "url" : string,
    "links": TaskLinks
}

type TaskLinks = {
    "reservations": string,
    "task_queue": string,
    "workspace": string,
    "workflow": string
}

export type Worker = TaskRouterResource & {
    "activityName": string,
    "activitySid": string,
    "attributes": string,
    "available": string,
    "dateStatusChanged": string,
    "friendlyName": string,
    "links": WorkerLinks
}

type WorkerLinks = {
    "cumulative_statistics": string,
    "reservations": string,
    "real_time_statistics": string,
    "statistics": string,
    "worker_channels": string,
    "channels": string,
    "worker_statistics": string,
    "workspace": string,
    "activity": string
}

export type WorkerStatistic = {
    "accountSid": string,
    "cumulative": CumulativeStatistics,
    "workerSid": string,
    "workerspaceSid": string,
    "url": string
}

type CumulativeStatistics = {
    "reservations_timed_out": number,
    "reservations_rejected": number,
    "reservations_created": number,
    "reservations_rescinded": number,
    "tasks_assigned": number,
    "start_time": string,
    "reservations_wrapup": number,
    "end_time": string,
    "reservations_accepted": number,
    "activity_durations": ActivityDuration[]
}

type ActivityDuration = {
    "avg": number,
    "min": number,
    "max": number,
    "friendly_name": string,
    "sid": string,
    "total": number
}

export type WorkerChannel = TaskRouterResource & {
    "assignedTasks": number,
    "available": boolean,
    "availableCapacityPercentage": number,
    "configuredCapacity": number,
    "taskChannelSid": string,
    "taskChannelUniqueName": string,
    "workerSid": string
}

export type TaskEvent = {
    "TaskPriority": string,
    "EventType": string,
    "WorkflowName": string,
    "Timestamp": string,
    "TaskAge": string,
    "TaskAssignmentStatus": string,
    "TaskAttributes": string,
    "TaskVersion": string,
    "TaskChannelUniqueName": string,
    "WorkspaceName": string,
    "OperatingUnitSid": string,
    "TaskChannelSid": string,
    "TaskQueueEnteredDate": string,
    "TaskDateCreated": string,
    "ResourceType": string,
    "TaskQueueName": string,
    "WorkflowSid": string,
    "AccountSid": string,
    "Sid": string,
    "TimestampMs": string,
    "TaskQueueTargetExpression": string,
    "WorkspaceSid": string,
    "TaskQueueSid": string,
    "EventDescription": string,
    "TaskSid": string,
    "ResourceSid": string,
}