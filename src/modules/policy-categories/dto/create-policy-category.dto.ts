import { ApiProperty } from '@nestjs/swagger'

export class CreatePolicyCategoryDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    client_id: number
}
