import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditCourseComponent } from './edit-course/edit-course.component';
import { DateInputComponent } from './edit-course/date-input/date-input.component';
import { DurationInputComponent } from './edit-course/duration-input/duration-input.component';
import { AuthorsInputComponent } from './edit-course/authors-input/authors-input.component';

@NgModule({
  declarations: [EditCourseComponent, DateInputComponent, DurationInputComponent, AuthorsInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditCourseModule { }
