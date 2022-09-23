import { Module } from "@nestjs/common";
import { WorkerController } from "./workers.controller";
import { WorkerService } from "./workers.service";

@Module({
    controllers:[WorkerController],
    providers:[WorkerService]
})

export class WorkerModule{}