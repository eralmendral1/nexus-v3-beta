import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class HoldParticipantDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    conferenceSid: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    participantSid: string


    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    hold: boolean
}