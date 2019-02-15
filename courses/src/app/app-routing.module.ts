import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { LoginComponent } from './auth/login/login.component'

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
