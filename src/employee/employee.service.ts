import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/auth/users.repository';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { EmployeeDTO } from './create-employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {

constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRespository : EmployeeRepository,
){}

createEmployee(employeeDto: EmployeeDTO){

    const {id, name,department,level} = employeeDto;

    const employee={
    id,
    name,
    department,
    level
    }

    return this.employeeRespository.save(employee);
}






}
