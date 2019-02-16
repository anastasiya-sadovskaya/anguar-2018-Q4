import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CoursesListModule } from './courses-list/courses-list.module';
import { AuthModule } from './auth/auth.module';
import { EditCourseModule } from './edit-course/edit-course.module'

import { AppComponent } from './app.component';
import { SearchSectionComponent } from './courses-list/search-section/search-section.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    CoursesListModule,
    AuthModule,
    EditCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
