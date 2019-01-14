import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from './courses-list/courses-list/courses-list.component'
const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
