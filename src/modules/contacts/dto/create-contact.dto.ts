

import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
    @ApiProperty()
    number: string

    @ApiProperty({ required: false })
    notes: string
}
