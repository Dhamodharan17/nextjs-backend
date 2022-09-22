import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports:[
    TasksModule,
    TypeOrmModule.forRoot({
      type : 'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'task-management',
      autoLoadEntities:true,
      synchronize:true,
    })
  ]
})
export class AppModule {}
