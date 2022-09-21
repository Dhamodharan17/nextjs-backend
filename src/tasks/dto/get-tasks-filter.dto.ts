// Since filter paramter can be status or description

import { TaskStatus } from "../task.model";

export class GetTasksFilterDto{
    status?: TaskStatus;
    search?:string;
}