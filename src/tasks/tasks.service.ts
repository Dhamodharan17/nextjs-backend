import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

private tasks = ["Walking","Reading"];

getAllTasks(){
    return this.tasks;
}


}
