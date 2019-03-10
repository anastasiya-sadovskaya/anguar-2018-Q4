import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CourseItem } from '../../shared/classes-implementing/classes-implementing';

@Component({
  selector: 'app-course-info-form',
  templateUrl: './course-info-form.component.html',
  styleUrls: ['./course-info-form.component.scss']
})
export class CourseInfoFormComponent implements OnInit {
  public course;
  private id: number;
  private isNewCourse: boolean;

  constructor( private coursesService: CoursesService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.coursesService.getItemById(data.id)
        .subscribe((course: CoursesListItem) => {
          this.course = course;
        },
        error => {
          this.router.navigate(['/404']);
        });
      } else {
        this.course = {name: '', description: '', length: 0, date: new Date()};
      }
    });
  }
  
  saveItem() {
    const newCourse = {name: this.course.name,
                       date: this.course.date,
                       length: this.course.length,
                       description: this.course.description};
    if (this.course.id !== this.id) {
      this.coursesService.updateItem(this.course.id, newCourse)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    } else {
      this.coursesService.createCourse(newCourse).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelEditting() {
    this.router.navigate(['/']);
  }

  onChangeDateClickHandler(date) {
    this.course.date = date;
  }

  onChangeDurationClickHandler(length) {
    this.course.length = length;
  }

}
