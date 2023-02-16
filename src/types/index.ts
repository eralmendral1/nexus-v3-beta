export * from './taskrouter.type'
export * from './taskrouter-callback.type'
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
    worker_id?: number,
    meta_data?: string
    createdAt: Date,
    updatedAt: Date
}

export type User = {
    id: number,
    callcenter_id?: number,
    sid?: string,
    name: string,
    email: string,
    email_verified_at: Date,
    avatar?: string,
    password: string,
    admin: boolean,
    external_agent: boolean,
    skills: string,
    timezone: string,
    block_reject: boolean,
    presence?: string,
    reservation_passthrough?: string,
    remember_token?: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt?: Date
}

export type OrderStatus = 'T' | 'A' | 'DELETED'

export type Order = {
    id ?: number,
    client_id ?: number,
    item_id ?: number,
    status?: string,
    scheduled_time?: Date,
    target_worker?: string,
    createdAt?: Date,
    updatedAt?: Date,
    completed_at?: Date,
    destination?: string,
    DATA1?: string
    DATA2?: string
    DATA3?: string
    DATA4?: string
    DATA5?: string
    DATA6?: string
    DATA7?: string
    DATA8?: string
    DATA9?: string
    DATA10?: string
    DATA11?: string
    DATA12?: string
    DATA13?: string
    DATA14?: string
    DATA15?: string
    DATA16?: string
    DATA17?: string
    DATA18?: string
    DATA19?: string
    DATA20?: string
    DATA21?: string
    DATA22?: string
    DATA23?: string
    DATA24?: string
    DATA25?: string
    RDATA1?: string
    RDATA2?: string
    RDATA3?: string
    RDATA4?: string
    RDATA5?: string
    RDATA6?: string
    RDATA7?: string
    RDATA8?: string
    RDATA9?: string
    RDATA10?: string
}

