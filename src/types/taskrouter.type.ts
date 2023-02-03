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