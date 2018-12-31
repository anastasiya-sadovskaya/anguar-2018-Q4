import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchSectionComponent } from './search-section/search-section.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchSectionComponent
  ]
})
export class CoursesListModule { }
