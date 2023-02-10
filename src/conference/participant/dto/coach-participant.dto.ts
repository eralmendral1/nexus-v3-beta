import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CoachParticipantDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    conferenceSid: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    callSidToCoach: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    agentSid: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    coachSid: string
}