import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) { }

    create(createContactDto: CreateContactDto) {
        return this.prisma.contact.create({ data: createContactDto })
    }

    findAll() {
        return this.prisma.contact.findMany()
    }

    findOne(id: number) {
        return this.prisma.contact.findFirst({ where: { id } })
    }

    update(id: number, updateContactDto: UpdateContactDto) {
        return this.prisma.contact.update({
            where: { id },
            data: {
                ...updateContactDto
            }
        })
    }

    remove(id: number) {
        return this.prisma.contact.delete({
            where: {
                id
            }
        })
    }
}
