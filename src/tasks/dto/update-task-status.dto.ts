import { IsEnum } from "class-validator";
import { TaskStatus } from "../task.model";

export class UpdateTaskStatusDto{

    @IsEnum(TaskStatus) // status value should be one of the enum
    status : TaskStatus
}