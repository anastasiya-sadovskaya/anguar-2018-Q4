import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { LoginComponent } from './auth/login/login.component'
import { EditCourseComponent } from './edit-course/edit-course/edit-course.component'

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditCourseComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
