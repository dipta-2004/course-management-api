import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll(): string {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.courseService.findOne(id);
  }
}