import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { Router } from '@angular/router';

import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CourseItem } from '../../shared/classes-implementing/classes-implementing'

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: CoursesListItem;
  private id = localStorage.getItem('editCourseId'); // temporary solution

  constructor( private coursesService: CoursesService, private router: Router ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse():void{
    this.coursesService.getItemById(+this.id)
      .subscribe((course: CoursesListItem) => {
        this.course = course;
      });
  }

  saveItem() {
    var newCourse = new CourseItem(+this.id, this.course.title, this.course.date, +this.course.duration, this.course.description, false);
    this.coursesService.updateItem(+this.id, newCourse);
    this.router.navigate(['/'])
  }

  cancelEditting(){
    this.router.navigate(['/'])
  }

  onChangeDateClickHandler(date){
    this.course.date = date;
  }

  onChangeDurationClickHandler(duration){
    this.course.duration = duration;
  }

}
