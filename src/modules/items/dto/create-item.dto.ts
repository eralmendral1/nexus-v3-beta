import { ApiProperty } from '@nestjs/swagger'

export class CreateItemDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    client_id: number

    @ApiProperty()
    intenal_name: string

    @ApiProperty()
    external_name: string

    @ApiProperty({ default: false })
    self_init: boolean

    @ApiProperty()
    channel_name: string

    @ApiProperty()
    channel_id: string

    @ApiProperty({ required: false })
    self_init_workflow: string

    @ApiProperty()
    workflow_name: string

    @ApiProperty()
    workflow_id: string

    @ApiProperty()
    template: string

    @ApiProperty({ required: false })
    icon_class: string


    @ApiProperty({ required: false })
    background_color: string

    @ApiProperty({ required: false })
    notification_tone: string

    @ApiProperty({ required: false })
    priority: number

    @ApiProperty({ required: false })
    exclude: boolean

    @ApiProperty({ required: false })
    timeout: number

    @ApiProperty({ default: true })
    auto_dial: boolean

    @ApiProperty({ required: false })
    passthrough_url: string

    @ApiProperty({ required: false })
    pending_warning_limit: number

    @ApiProperty({ required: false })
    pending_danger_limit: number

    @ApiProperty({ required: false })
    accepted_warning_limit: number

    @ApiProperty({ required: false })
    accepted_danger_limit: number

    @ApiProperty({ required: false })
    wrapup_time: number

    @ApiProperty({ required: false })
    createdBy: string
}
