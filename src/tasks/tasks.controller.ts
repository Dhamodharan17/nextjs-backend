import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    // Adding for type safety - return type as Task[]
    return this.tasksService.getAllTasks();
  }
  /* METHOD 1 - Gets all paramters
 @Post()
createTask(@Body() body){
console.log('body',body)
}
*/

  // METHOD 2
 /* @Post()
  createTask(@Body('title') title, @Body('description') description): Task {
    return this.tasksService.createTask(title, description);
  }
*/


@Post()
createTask(@Body() createTaskDto : CreateTaskDto):Task{
return this.tasksService.createTask(createTaskDto);
}


}
