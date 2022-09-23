import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  getWorkers(title: string, description: string) {
    return title + ' job is to ' + description;
  }
}
