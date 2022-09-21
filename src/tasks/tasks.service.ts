import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((tasks) => tasks.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }

        return false;
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    // try to get task

    // if not found, throw an error (404 not found)

    // otherwise, return the found task
    const found = this.tasks.find((task) => task.id == id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`); // Exception handled by internals of nest.js
    }

    return found;
  }

  deleteTaskById(id: string): Task[] {

    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter(task=>task.id !== found.id);
    return this.tasks;
    
    /*const updated: Task[] = this.tasks.filter((t) => t.id !== id);
    this.tasks = updated;
    return updated;*/
  }

  updateTaskStatus(status: TaskStatus, id: string): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
    /*this.tasks.find((task) => task.id === id).status = status;
    return this.tasks;*/
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const id: string = String(uuid()).substring(0, 2);
    const task: Task = {
      id,
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
