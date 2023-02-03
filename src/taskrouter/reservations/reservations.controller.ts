import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { Reservation } from '@/types/taskrouter.type'
import { ReservationsService } from './reservations.service'
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto'

@Controller('taskrouter/reservations')
export class ReservationsController {
    constructor(private reservationService: ReservationsService) { }

    @Get('pending')
    getPendingReservations(): Reservation[] {
        return this.reservationService.getMyPendingReservations()
    }

    @Get('accepted')
    getAcceptedReservations(): Reservation[] {
        return this.reservationService.getMyAcceptedReservations()
    }


    @Get(':sid/tasks/:taskSid')
    getReservation(@Param() params): Reservation {
        return this.reservationService.getReservation(params.sid, params.taskSid)
    }

    @Post('status')
    updateReservationStatus(@Body() updateReservationStatusDto: UpdateReservationStatusDto): Reservation {
        return this.reservationService.updateReservationStatus(updateReservationStatusDto)
    }
}
