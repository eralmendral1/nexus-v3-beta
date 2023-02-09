export * from './taskrouter.type'
export * from './workers.type'
export * from './chat.type'

export type Tracker = {
    id: number,
    name: string,
    description: string,
    color: string,
    createdAt: Date,
    updatedAt: Date
}

export type TrackerHistory = {
    id: number,
    user_id: number,
    type: string,
    worker_id ?: number,
    meta_data ?: string
    createdAt: Date,
    updatedAt: Date
}

export type User = {
    id: number,
    callcenter_id ?: number,
    sid ?: string,
    name: string,
    email: string,
    email_verified_at: Date,
    avatar ?: string,
    password: string,
    admin: boolean,
    external_agent: boolean,
    skills: string,
    timezone: string,
    block_reject: boolean,
    presence ?: string,
    reservation_passthrough ?: string,
    remember_token ?: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt ?: Date
}