import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreatePolicyCategoryDto } from './dto/create-policy-category.dto'
import { UpdatePolicyCategoryDto } from './dto/update-policy-category.dto'

@Injectable()
export class PolicyCategoriesService {
    constructor(private prisma: PrismaService) { }

    create(createPolicyCategoryDto: CreatePolicyCategoryDto) {
        return this.prisma.policyCategory.create({ data: createPolicyCategoryDto })
    }

    findAll() {
        return this.prisma.policyCategory.findMany()
    }

    findOne(id: number) {
        return this.prisma.policyCategory.findFirst({ where: { id } })
    }

    update(id: number, updatePolicyCategoryDto: UpdatePolicyCategoryDto) {
        return this.prisma.policyCategory.update({
            where: { id },
            data: {
                ...updatePolicyCategoryDto
            }
        })
    }

    remove(id: number) {
        return this.prisma.policyCategory.delete({
            where: {
                id
            }
        })
    }
}
