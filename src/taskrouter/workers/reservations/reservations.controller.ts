import { Controller, Get, Param } from '@nestjs/common'
import { Reservation } from '@/types'
import { ReservationsService } from './reservations.service'

@Controller('taskrouter/workers/reservations')
export class ReservationsController {
    constructor(private readonly reservationService: ReservationsService) { }

    @Get(':workerSid')
    getWorkerReservations(@Param() params): Reservation[] {
        return this.reservationService.getWorkerReservations(params.workerSid)
    }

    @Get(':workerSid/pending')
    getWorkerPendingReservations(@Param() params): Reservation[]{
        return this.reservationService.getWorkerReservations(params.workerSid, 'pending')
    }

    @Get(':workerSid/accepted')
    getWorkerAcceptedReservations(@Param() params): Reservation[] {
        return this.reservationService.getWorkerReservations(params.workerSid, 'accepted')
    }
}
