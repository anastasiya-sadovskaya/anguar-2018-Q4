import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration-pipe/duration.pipe';
import { CourseBorderDirective } from './border-directive/course-border.directive';
import { OrderedByPipe } from './ordered-by-pipe/ordered-by.pipe';
import { FilterCoursesPipe } from './filter-courses-pipe/filter-courses.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    CourseBorderDirective,
    OrderedByPipe,
    FilterCoursesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    CourseBorderDirective,
    OrderedByPipe,
    FilterCoursesPipe
  ]
})
export class SharedModule { }
