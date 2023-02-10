import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTrackerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ required: false })
    description: string

    @ApiProperty({ default: "#1e5ebd" })
    color: string
}