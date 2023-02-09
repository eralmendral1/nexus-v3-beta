import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'


export class CreateHistoryDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string

    @ApiProperty({ required: false })
    meta_data: string

    @ApiProperty({ required: false })
    worker_id: number
}