import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { LoginComponent } from './auth/login/login.component';
import { CourseInfoFormComponent } from './course-info/course-info-form/course-info-form.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: CourseInfoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'course/:id', component: CourseInfoFormComponent, canActivate: [ AuthGuard ]},
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
