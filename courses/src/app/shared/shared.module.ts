import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration-pipe/duration.pipe';
import { CourseBorderDirective } from './border-directive/course-border.directive';
import { OrderedByPipe } from './ordered-by-pipe/ordered-by.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    CourseBorderDirective,
    OrderedByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    CourseBorderDirective,
    OrderedByPipe
  ]
})
export class SharedModule { }
