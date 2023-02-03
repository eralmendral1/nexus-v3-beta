export type TaskRouterResource = {
    "accountSid": string,
    "dateCreated": string,
    "dateUpdated": string,
    "sid": string,
    "url": string,
    "workspaceSid": string,
    "links": LinkWorkspace
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
    links: WorkflowLinks
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
}

export type Reservation = TaskRouterResource & {
    "reservationStatus": string,
    "taskSid": string,
    "workerName": string,
    "workerSid": string,
    "links": {
        "task": string,
        "worker": string,
        "workspace": string
    }
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
    "links": TaskLinks
}

export type TaskLinks = {
    "reservations": string,
    "task_queue": string,
    "workspace": string,
    "workflow": string
}