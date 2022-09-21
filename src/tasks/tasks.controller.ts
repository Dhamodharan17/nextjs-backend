import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto:GetTasksFilterDto): Task[] {
    
    // if we have any filter defined, call tasksServive.getTasksWilFilters
    // otherwise, just get all tasks

    if(Object.keys(filterDto).length){ // if filters exists
        return this.tasksService.getTasksWithFilter(filterDto);
    }else{
        return this.tasksService.getAllTasks();
    }
 
  }

  @Get('/:id') //path paramter
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task[] {
    return this.tasksService.updateTaskStatus(status, id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Task[] {
    return this.tasksService.deleteTaskById(id);
  }

  /* METHOD 1 - Gets all paramters
 @Post()
createTask(@Body() body){
console.log('body',body)
}


METHOD 2
  @Post()
  createTask(@Body('title') title, @Body('description') description): Task {
    return this.tasksService.createTask(title, description);
  }
*/

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
