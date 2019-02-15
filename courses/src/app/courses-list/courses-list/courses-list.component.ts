import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { CoursesService } from '../../shared/services/courses/courses.service'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  public coursesList: CoursesListItem [];
  private searchRequest: string;

  constructor(private coursesService: CoursesService){ }

  ngOnInit() {
    this.getCourses();
  }

  getCourses():void{
    this.coursesService.getCourses()
      .subscribe((coursesList: CoursesListItem[]) => {
        this.coursesList = coursesList
      });
  }

  onSeeMoreClick(): void{
    console.log("See more");
  }

  onCourseItemDelete(itemId:number): void{
    if(confirm('Do you really want to delete this course?')){
      console.log(itemId);
      this.coursesService.removeCourseItem(itemId)
        .subscribe((coursesList: CoursesListItem[]) => {
          this.coursesList = coursesList;
        });
    };
  }

  onSearchClick(searchRequest: string): void {
    this.searchRequest = searchRequest;
  }
}
