import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { PolicyCategoriesService } from './policy-categories.service'
import { CreatePolicyCategoryDto } from './dto/create-policy-category.dto'
import { UpdatePolicyCategoryDto } from './dto/update-policy-category.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Client Policy Categories')
@Controller('policy-categories')
export class PolicyCategoriesController {
    constructor(private readonly policyCategoriesService: PolicyCategoriesService) { }

    @Post()
    create(@Body() createPolicyCategoryDto: CreatePolicyCategoryDto) {
        return this.policyCategoriesService.create(createPolicyCategoryDto)
    }

    @Get()
    findAll() {
        return this.policyCategoriesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.policyCategoriesService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePolicyCategoryDto: UpdatePolicyCategoryDto) {
        return this.policyCategoriesService.update(+id, updatePolicyCategoryDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.policyCategoriesService.remove(+id)
    }
}
