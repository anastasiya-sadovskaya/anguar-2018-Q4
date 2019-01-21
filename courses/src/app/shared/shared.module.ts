import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration-pipe/duration.pipe';
import { CourseBorderDirective } from './border-directive/course-border.directive';

@NgModule({
  declarations: [
    DurationPipe,
    CourseBorderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    CourseBorderDirective
  ]
})
export class SharedModule { }
