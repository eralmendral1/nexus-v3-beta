import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class TrackerUserDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    tracker_id: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number
}