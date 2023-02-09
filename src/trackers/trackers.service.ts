import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTrackerDto } from './dto/create-tracker.dto'
import { Tracker, User } from '@/types'
import { UpdateTrackerDto } from './dto/update-tracker.dto'
import { TrackerUserDto } from './dto/tracker-user.dto'

@Injectable()
export class TrackersService {
    constructor(private prisma: PrismaService) { }

    findAll(): Promise<Tracker[]> {
        return this.prisma.tracker.findMany({
            include: {
                users: true
            }
        })
    }

    findOne(id: number): Promise<Tracker> {
        return this.prisma.tracker.findUnique({
            where: { id }, include: {
                users: true
            }
        },)
    }

    create(createTrackerDto: CreateTrackerDto): Promise<Tracker> {
        return this.prisma.tracker.create({ data: createTrackerDto })
    }

    update(id: number, updateTrackerDto: UpdateTrackerDto): Promise<Tracker> {
        return this.prisma.tracker.update({
            where: { id },
            data: updateTrackerDto
        })
    }

    remove(id: number) {
        return this.prisma.tracker.delete({
            where: { id }
        })
    }

    attachUser(trackerUserDto: TrackerUserDto) {
        return this.prisma.usersOnTrackers.create({ data: trackerUserDto })
    }


    detachUser({ tracker_id, user_id }: TrackerUserDto) {
        return this.prisma.usersOnTrackers.deleteMany({
            where: {
                tracker_id,
                user_id
            }
        })
    }

    unAssignedUsers(): Promise<User[]> {
        return this.prisma.user.findMany({
            where: { trackers: { none: {} } }
        })
    }
}
