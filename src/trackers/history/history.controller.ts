import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common'
import { TrackerHistory } from '../../types'
import { CreateHistoryDto } from './dto/create-history.dto'
import { UpdateHistoryDto } from './dto/update-history.dto'
import { HistoryService } from './history.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Tracker History')
@Controller('tracker-history')
export class HistoryController {
    constructor(private historyService: HistoryService) { }

    @Get()
    findAll(): Promise<TrackerHistory[]> {
        return this.historyService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<TrackerHistory> {
        return this.historyService.findOne(+id)
    }

    @Post()
    create(@Body() createHistoryDto: CreateHistoryDto): Promise<TrackerHistory> {
        return this.historyService.create(createHistoryDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto): Promise<TrackerHistory> {
        return this.historyService.update(+id, updateHistoryDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<TrackerHistory> {
        return this.historyService.remove(+id)
    }
}   
