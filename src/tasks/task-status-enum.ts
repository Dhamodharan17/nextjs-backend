
/* We don't need this, because we have entity to get data from database

export interface Task{

    id: string;
    title: string;
    description: string;
    status: TaskStatus;

}*/

export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}