import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { FormsModule } from '@angular/forms';
import { CourseBorderDirective } from './../custom-directives/course-border.directive';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent, 
    SearchSectionComponent,
    CourseBorderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchSectionComponent,
  ]
})
export class CoursesListModule { }
