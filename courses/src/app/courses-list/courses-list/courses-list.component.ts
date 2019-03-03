import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { AuthService } from '../../shared/services/auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public coursesList: CoursesListItem [];
  public searchRequest: string;

  constructor(private coursesService: CoursesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getCourses(): void {
    this.coursesService.getCourses()
      .subscribe((coursesList: CoursesListItem[]) => {
        this.coursesList = coursesList;
      });
  }

  onSeeMoreClick(): void {
    console.log('See more');
  }

  onCourseItemEdit(itemId: number): void {
    this.router.navigate(['/edit']);
  }

  onCourseItemDelete(itemId: number): void {
    if (confirm('Do you really want to delete this course?')) {
      console.log(itemId);
      this.coursesService.removeCourseItem(itemId)
        .subscribe((coursesList: CoursesListItem[]) => {
          this.coursesList = coursesList;
        });
    }
  }

  onSearchClick(searchRequest: string): void {
    this.searchRequest = searchRequest;
  }

  onAddCourseClick() {
    this.router.navigate(['/edit']);
  }
}
