import { Injectable } from '@nestjs/common'
import { CreateDestinationNumberDto } from './dto/create-destination-number.dto'
import { UpdateDestinationNumberDto } from './dto/update-destination-number.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DestinationNumbersService {
    constructor(private prisma: PrismaService) { }

    create(createDestinationNumberDto: CreateDestinationNumberDto) {
        return this.prisma.destinationNumber.create({ data: createDestinationNumberDto })
    }

    findAll() {
        return this.prisma.destinationNumber.findMany()
    }

    findOne(id: number) {
        return this.prisma.destinationNumber.findFirst({ where: { id } })
    }

    update(id: number, updateDestinationNumberDto: UpdateDestinationNumberDto) {
        return this.prisma.destinationNumber.update({
            where: { id },
            data: {
                ...updateDestinationNumberDto
            }
        })
    }

    remove(id: number) {
        return this.prisma.destinationNumber.delete({
            where: {
                id
            }
        })
    }
}
