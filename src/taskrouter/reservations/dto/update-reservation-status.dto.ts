
import { ApiProperty } from '@nestjs/swagger'
import { IsString , IsNotEmpty} from 'class-validator'

export class UpdateReservationStatusDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    taskSid: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    reservationSid: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: ReservationStatus

    @ApiProperty({ required: false })
    activitySid ?: string
}

enum ReservationStatus {
    accepted,
    rejected
}
