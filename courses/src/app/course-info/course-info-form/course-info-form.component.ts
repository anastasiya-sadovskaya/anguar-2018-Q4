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
  public course: CoursesListItem;
  private id: number;
  private isNewCourse: boolean;

  constructor( private coursesService: CoursesService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.getCourse(+data.id);
        if (!this.course) {
          this.router.navigate(['/404']);
        }
      } else {
        this.coursesService.getItemsQuantity()
          .subscribe((id) => {
            this.id = id + 1;
          });
        this.course = new CourseItem(this.id, '', new Date(), 0, '', false);
      }
    });
  }

  getCourse(id: number): void {
    this.coursesService.getItemById(id)
      .subscribe((course: CoursesListItem) => {
        this.course = course;
      });
  }

  saveItem() {
    const newCourse = new CourseItem(this.course.id,
                                      this.course.title,
                                      this.course.date,
                                      +this.course.duration,
                                      this.course.description,
                                      this.course.topRated);
    if (this.course.id !== this.id) {
      this.coursesService.updateItem(this.course.id, newCourse);
    } else {
      this.coursesService.createCourse(newCourse);
    }
    this.router.navigate(['/']);
  }

  cancelEditting() {
    this.router.navigate(['/']);
  }

  onChangeDateClickHandler(date) {
    this.course.date = date;
  }

  onChangeDurationClickHandler(duration) {
    this.course.duration = duration;
  }

}
