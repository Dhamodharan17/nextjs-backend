import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { title } from 'process';
import { WorkerDto } from './worker.dto';
import { WorkerService } from './workers.service';

@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {}

  @Get('/:location')
  getWorkLocation(@Param('location') location: string, @Body('title') title) {
    return `Location of the worker is ${location} - ${title}`;
  }

  @Get()
  getWorkers(@Body() workerDto: WorkerDto) {
    return (
      workerDto.id +
      ' ' +
      workerDto.title +
      ' ' +
      workerDto.description +
      ' ' +
      workerDto.experience
    );
  }
}
