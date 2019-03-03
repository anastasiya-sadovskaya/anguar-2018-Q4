import { Injectable } from '@angular/core';
import { CoursesListItem } from '../../models/courses-list-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private twoDays = 2 * 24 * 3600 * 1000;
  private coursesList: CoursesListItem[] = [
    {
      id: 1,
      title: 'Video 1',
      date: new Date(+new Date() + this.twoDays), // upcomming
      duration: 148,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      topRated: true,
    },
    {
      id: 2,
      title: 'Video 2',
      date: new Date(+new Date() - this.twoDays),  // fresh
      duration: 89,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      topRated: false,
    },
    {
      id: 3,
      title: 'Video 3',
      date: new Date(+new Date() - (8 * this.twoDays)),   // old
      duration: 35,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      topRated: true,
    },
    {
      id: 4,
      title: 'Video 4',
      date: new Date(2018, 10, 6),
      duration: 75,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      topRated: true,
    },
    {
      id: 5,
      title: 'Video 5',
      date: new Date(2018, 11, 18),
      duration: 120,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      topRated: false,
    }
  ];

  constructor() { }

  getCourses(): Observable<CoursesListItem[]> {
    return of(this.coursesList);
  }

  removeCourseItem(id: number): Observable<CoursesListItem[]> {
    this.coursesList = this.coursesList.filter((course: CoursesListItem) => course.id !== id);

    return of(this.coursesList);
  }

  createCourse(course: CoursesListItem): Observable<CoursesListItem> {
    this.coursesList.push(course);
    return of(course);
  }

  getItemById(id: number): Observable<CoursesListItem> {
    const course: CoursesListItem = this.coursesList.find((c: CoursesListItem) => c.id === id);

    return of(course);
  }

  updateItem(id: number, updatedCourse: CoursesListItem): Observable<CoursesListItem> {
    this.coursesList = [...this.coursesList.filter((course: CoursesListItem) => course.id !== id), updatedCourse];

    return of(updatedCourse);
  }

  getItemsQuantity(): Observable<number> {
    return of(this.coursesList.length);
  }
}
