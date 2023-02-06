export class AddWorkerCapabilityDto {
    workerSid: string
    userId: number
    status: Status
    itemIds: number[]
}

type Status = 'A' | 'I'