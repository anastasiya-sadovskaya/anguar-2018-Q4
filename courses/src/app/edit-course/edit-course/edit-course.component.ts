import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { Router } from '@angular/router';

import { CoursesListItem } from '../../shared/models/courses-list-item.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: CoursesListItem;

  constructor( private coursesService: CoursesService, private router: Router ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse():void{
    const id = localStorage.getItem('editCourseId'); // temporary solution
    this.coursesService.getItemById(+id)
      .subscribe((course: CoursesListItem) => {
        this.course = course;
      });
  }

  saveItem() {
    this.router.navigate(['/'])
  }

  cancelEditting(){
    this.router.navigate(['/'])
  }

}
