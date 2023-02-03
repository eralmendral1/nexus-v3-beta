import { TaskRouterResource } from './taskrouter.type'

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


