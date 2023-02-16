
export class CreateTaskHistoryDto {
    sid: string
    order_id: number
    item_id: number
    event_type: string
    event_description: string
    task_sid: string
    task_priority?: number
    task_attributes?: string
    task_assignment_status: string
    task_age: number
    task_version?: string
    reservation_sid?: string
    reservation_version?: string
    resource_type?: string
    resource_sid?: string
    worker_sid?: string
    worker_name?: string
    worker_version?: string
    worker_activity_name?: string
    worker_attributes?: string
    timestamp_ms?: string
    timestamp: string
}