import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseInfoFormComponent } from './course-info-form/course-info-form.component';
import { DateInputComponent } from './course-info-form/date-input/date-input.component';
import { DurationInputComponent } from './course-info-form/duration-input/duration-input.component';
import { AuthorsInputComponent } from './course-info-form/authors-input/authors-input.component';

@NgModule({
  declarations: [
    CourseInfoFormComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourseInfoModule { }
