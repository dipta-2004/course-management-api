import { CourseService } from './course.service';
import { Controller, Get, Param, Post,  Put, Patch, Delete, } from '@nestjs/common';

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
  @Post()
    create(): string {
    return this.courseService.create();
    }
  @Put(':id')
    update(@Param('id') id: string): string {
    return this.courseService.update(id);
    }
  @Patch(':id')
   patch(@Param('id') id: string): string {
   return this.courseService.patch(id);
   }
   @Delete(':id')
   remove(@Param('id') id: string): string {
   return this.courseService.remove(id);
   }

}