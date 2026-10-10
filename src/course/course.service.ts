import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  findAll(): string {
    return 'Get All Courses - from Service';
  }

  findOne(id: string): string {
    return `Get Course with ID: ${id} - from Service`;
  }
}