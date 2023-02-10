import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateParticipantDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    conferenceSid: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    from: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    participantSid: string

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    startConferenceOnEnter: boolean

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    endConferenceOnExit: boolean
}