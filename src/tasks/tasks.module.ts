import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])], // Dependency Injection - We can use whereever we want
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
