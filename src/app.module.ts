import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type : 'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'task-management',
      autoLoadEntities:true,
      synchronize:true,
    }),
    EmployeeModule,
    AuthModule
  ]
})
export class AppModule {}
