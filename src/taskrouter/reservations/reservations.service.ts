import { Injectable } from '@nestjs/common'
import { Reservation } from '@/types/taskrouter.type'
import { TaskrouterService } from '../taskrouter.service'
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto'

@Injectable()
export class ReservationsService extends TaskrouterService {

    getMyPendingReservations(): Reservation[] {
        const workerSid = 'WK77b37617f41db2cdd2e4014f41d08055'
        return this.twilioTaskrouter.workers(workerSid).reservations.list({ "reservationStatus": "pending" })
    }

    getMyAcceptedReservations(): Reservation[] {
        const workerSid = 'WK77b37617f41db2cdd2e4014f41d08055'
        return this.twilioTaskrouter.workers(workerSid).reservations.list({ "reservationStatus": "accepted" })
    }

    getReservation(reservationSid: string, taskSid: string): Reservation {
        return this.twilioTaskrouter.tasks(taskSid).reservations(reservationSid).fetch()
    }

    updateReservationStatus({ taskSid, reservationSid, status }: UpdateReservationStatusDto): Reservation {
        return this.twilioTaskrouter.tasks(taskSid).reservations(reservationSid).update({ reservationStatus: status })
    }
}
