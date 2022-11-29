
import { ApiProperty } from '@nestjs/swagger'

export class CreateDestinationNumberDto {
    @ApiProperty()
    client_id: number

    @ApiProperty()
    number: string

    @ApiProperty({ required: false })
    extension: string

    @ApiProperty()
    label: string
}
