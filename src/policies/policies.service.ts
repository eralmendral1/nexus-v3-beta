import { Injectable } from '@nestjs/common'
import { CreatePolicyDto } from './dto/create-policy.dto'
import { UpdatePolicyDto } from './dto/update-policy.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class PoliciesService {

    constructor(private prisma: PrismaService) { }


    create(createPolicyDto: CreatePolicyDto) {
        return this.prisma.policy.create({ data: createPolicyDto })
    }

    findAll() {
        return this.prisma.policy.findMany()
    }

    findOne(id: number) {
        return this.prisma.policy.findFirst({ where: { id } })
    }

    update(id: number, updatePolicyDto: UpdatePolicyDto) {
        return this.prisma.policy.update({
            where: { id },
            data: {
                ...updatePolicyDto
            }
        })
    }

    remove(id: number) {
        return this.prisma.policy.delete({
            where: {
                id
            }
        })
    }
}
