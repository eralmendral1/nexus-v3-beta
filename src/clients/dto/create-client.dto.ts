
import { ApiProperty } from '@nestjs/swagger'

export class CreateClientDto {
    @ApiProperty()
    id: number

    @ApiProperty({ required: false })
    masterClient: number

    @ApiProperty()
    name: string

    @ApiProperty({ required: false })
    email: string

    @ApiProperty({ default: false })
    disabled: boolean

    @ApiProperty({ required: false })
    address1: string

    @ApiProperty({ required: false })
    address2: string

    @ApiProperty({ required: false })
    city: string

    @ApiProperty({ required: false })
    state: string

    @ApiProperty({ required: false })
    zip: string

    @ApiProperty({ required: false })
    phone1: string

    @ApiProperty({ required: false })
    phone2: string

    @ApiProperty({ required: false })
    fax: string
}
