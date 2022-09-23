import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeDTO } from './create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

@Post()
createEmployee(@Body() employeeDto : EmployeeDTO){
return this.employeeService.createEmployee(employeeDto);
}

}
