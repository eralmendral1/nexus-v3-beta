import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from '@/types/taskrouter.type'
import { TasksService } from './tasks.service'
import { UpdateTaskStatusDto } from './dto/updateTaskStatus.dto'

@Controller('taskrouter/tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get('all/pending')
    getAllPendingTasks(): Task[] {
        return this.taskService.getAllPendingTasks()
    }

    @Get('my/pending')
    getMyPendingTasks(): Task[] {
        return this.taskService.getMyPendingTasks()
    }

    @Get('my/reserved')
    getMyReservedTasks(): Task[] {
        return this.taskService.getMyReservedTasks()
    }

    @Get(':taskSid/reservations')
    getTaskReservations(@Param() params) {
        return this.taskService.getTaskReservations(params.taskSid)
    }

    @Get(':taskSid')
    getTask(@Param() params): Task {
        return this.taskService.getTask(params.taskSid)
    }

    @Post('/status')
    updateTaskStatus(@Body() updateTaskStatusDto: UpdateTaskStatusDto): Task {
        return this.taskService.updateTaskStatus(updateTaskStatusDto)
    }
}
