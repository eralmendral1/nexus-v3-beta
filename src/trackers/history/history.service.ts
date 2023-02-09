import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { TrackerHistory } from '../../types'
import { CreateHistoryDto } from './dto/create-history.dto'
import { UpdateHistoryDto } from './dto/update-history.dto'

@Injectable()
export class HistoryService {
    constructor(private prisma: PrismaService) { }

    findAll(): Promise<TrackerHistory[]> {
        return this.prisma.trackerHistory.findMany({
            include: {
                user: true
            }
        })
    }

    findOne(id: number): Promise<TrackerHistory> {
        return this.prisma.trackerHistory.findUnique({
            where: { id }, include: {
                user: true
            }
        })
    }

    create(createHistoryDto: CreateHistoryDto): Promise<TrackerHistory> {
        return this.prisma.trackerHistory.create({ data: createHistoryDto })
    }

    update(id: number, updateHistoryDto: UpdateHistoryDto): Promise<TrackerHistory> {
        return this.prisma.trackerHistory.update({
            where: { id },
            data: { ...updateHistoryDto }
        })
    }

    remove(id: number): Promise<TrackerHistory> {
        return this.prisma.trackerHistory.delete({
            where: { id }
        })
    }
}
