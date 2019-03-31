import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CourseItem } from '../../shared/classes-implementing/classes-implementing';
import * as moment from 'moment';

@Component({
  selector: 'app-course-info-form',
  templateUrl: './course-info-form.component.html',
  styleUrls: ['./course-info-form.component.scss'],
})
export class CourseInfoFormComponent implements OnInit {
  public courseInfo: FormGroup;
  public course;
  private id: number;
  private isNewCourse: boolean;

  constructor( private coursesService: CoursesService, private router: Router, private route: ActivatedRoute ) {
    this.courseInfo = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      date: new FormControl(null, [Validators.required]),
      length: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
    });
   }

   get formInvalid(): boolean {
    return this.courseInfo.invalid;
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.coursesService.getItemById(data.id)
        .subscribe((course: CoursesListItem) => {
          this.course = course;

          this.setFormFields(this.course);
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
    if (this.course.id !== this.id) {
      this.coursesService.updateItem(this.course.id, this.courseInfo.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.coursesService.createCourse(this.courseInfo.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  setFormFields(course) {
    this.courseInfo.setValue({
      name: course.name,
      description: course.description,
      date: moment(course.date).format('YYYY-MM-DD'),
      length: String(course.length),
      // authors: course.authors,
    });
  }

  cancelEditting() {
    this.router.navigate(['/']);
  }
}
