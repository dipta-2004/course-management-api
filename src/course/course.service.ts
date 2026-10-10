import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  findAll(): string {
    return 'Get All Courses - from Service';
  }

  findOne(id: string): string {
    return `Get Course with ID: ${id} - from Service`;
  }
  create(): string {
  return 'Create Course - from Service';
  }
  update(id: string): string {
  return `Update Course ${id} - from Service`;
  }
  patch(id: string): string {
  return `Patch Course ${id} - from Service`;
  }
  remove(id: string): string {
  return `Delete Course ${id} - from Service`;
  }
}