import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CapabilityTokenDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    ttl: number


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    workerSid: string
}