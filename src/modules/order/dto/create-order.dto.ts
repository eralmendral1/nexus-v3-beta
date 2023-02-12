import { ApiProperty } from '@nestjs/swagger'


export class CreateOrderDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    client_id: number

    @ApiProperty()
    item_id: number

    @ApiProperty()
    status?: string

    @ApiProperty()
    scheduled_time?: Date

    @ApiProperty()
    target_worker?: string

    @ApiProperty()
    destination?: string

    @ApiProperty()
    DATA1?: string

    @ApiProperty()
    DATA2?: string

    @ApiProperty()
    DATA3?: string

    @ApiProperty()
    DATA4?: string

    @ApiProperty()
    DATA5?: string

    @ApiProperty()
    DATA6?: string

    @ApiProperty()
    DATA7?: string

    @ApiProperty()
    DATA8?: string

    @ApiProperty()
    DATA9?: string

    @ApiProperty()
    DATA10?: string

    @ApiProperty()
    DATA11?: string

    @ApiProperty()
    DATA12?: string

    @ApiProperty()
    DATA13?: string

    @ApiProperty()
    DATA14?: string

    @ApiProperty()
    DATA15?: string

    @ApiProperty()
    DATA16?: string

    @ApiProperty()
    DATA17?: string

    @ApiProperty()
    DATA18?: string

    @ApiProperty()
    DATA19?: string

    @ApiProperty()
    DATA20?: string

    @ApiProperty()
    DATA21?: string

    @ApiProperty()
    DATA22?: string

    @ApiProperty()
    DATA23?: string

    @ApiProperty()
    DATA24?: string

    @ApiProperty()
    DATA25?: string

    @ApiProperty()
    RDATA1?: string

    @ApiProperty()
    RDATA2?: string

    @ApiProperty()
    RDATA3?: string

    @ApiProperty()
    RDATA4?: string

    @ApiProperty()
    RDATA5?: string

    @ApiProperty()
    RDATA6?: string

    @ApiProperty()
    RDATA7?: string

    @ApiProperty()
    RDATA8?: string

    @ApiProperty()
    RDATA9?: string

    @ApiProperty()
    RDATA10?: string

    created_at?: Date
    updated_at?: Date
    completed_at?: Date
    deleted_at?: Date
}