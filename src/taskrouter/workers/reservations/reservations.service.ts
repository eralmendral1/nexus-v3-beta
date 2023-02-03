import { Injectable } from '@nestjs/common'
import { Reservation } from '@/types'
import { TaskrouterService } from '../../taskrouter.service'

@Injectable()
export class ReservationsService extends TaskrouterService {

    getWorkerReservations(workerSid: string, status?: string): Reservation[] {
        return this.twilioClient.workers(workerSid).reservations.list(status ? { "reservationStatus": status } : null)
    }
}
