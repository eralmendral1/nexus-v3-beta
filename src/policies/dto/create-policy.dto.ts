import { ApiProperty } from '@nestjs/swagger'

export class CreatePolicyDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    category_id: number
}

