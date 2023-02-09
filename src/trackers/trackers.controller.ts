import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common'
import { CreateTrackerDto } from './dto/create-tracker.dto'
import { TrackersService } from './trackers.service'
import { Tracker, User } from '@/types'
import { ApiTags } from '@nestjs/swagger'
import { UpdateTrackerDto } from './dto/update-tracker.dto'
import { TrackerUserDto } from './dto/tracker-user.dto'

@ApiTags('Trackers')
@Controller('trackers')
export class TrackersController {
    constructor(private readonly trackerService: TrackersService) { }

    @Get()
    findAll(): Promise<Tracker[]> {
        return this.trackerService.findAll()
    }


    @Get(':id')
    findOne(@Param('id') id: string): Promise<Tracker> {
        return this.trackerService.findOne(+id)
    }


    @Post()
    create(@Body() createTrackerDto: CreateTrackerDto): Promise<Tracker> {
        return this.trackerService.create(createTrackerDto)
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTrackerDto: UpdateTrackerDto): Promise<Tracker> {
        return this.trackerService.update(+id, updateTrackerDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.trackerService.remove(+id)
    }


    @Post('attach')
    attachUser(@Body() trackerUserDto: TrackerUserDto) {
        return this.trackerService.attachUser(trackerUserDto)
    }


    @Post('detach')
    detachUser(@Body() trackerUserDto: TrackerUserDto) {
        return this.trackerService.detachUser(trackerUserDto)
    }


    @Get('unassigned/users')
    findUnassignedUsers(): Promise<User[]> {
        return this.trackerService.unAssignedUsers()
    }
}
