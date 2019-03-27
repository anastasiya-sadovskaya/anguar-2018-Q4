import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public coursesList: CoursesListItem [] = [];
  private coursesStart = 0;
  private coursesCount = 5; // TODO: add config file
  public searchRequest = '';
  public searchRequestSubj: Observable<string> = new Subject<string>();

  constructor(private coursesService: CoursesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
    this.searchRequestSubj.subscribe((searchRequest: string) => {
      this.searchRequest = searchRequest;
      console.log(searchRequest);
      this.getCourses();
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getCourses(): void {
    const params = {textFragment: `${this.searchRequest}`, start: `${this.coursesStart}`, count: `${this.coursesCount}`};
    this.coursesService.getCourses(params)
      .subscribe((coursesList: CoursesListItem[]) => {
        this.coursesList = coursesList;
      });
  }

  onSeeMoreClick(): void {
    this.coursesCount += this.coursesCount;
    this.getCourses();
  }

  onCourseItemEdit(itemId: number): void {
    this.router.navigate(['/edit']);
  }

  onCourseItemDelete(itemId: number): void {
    if (confirm('Do you really want to delete this course?')) {
      console.log(itemId);
      this.coursesService.removeCourseItem(itemId)
        .subscribe((coursesList: CoursesListItem[]) => {
          this.getCourses();
        });
    }
  }

  onAddCourseClick() {
    this.router.navigate(['/new']);
  }
}
