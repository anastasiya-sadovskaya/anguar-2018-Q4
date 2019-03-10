import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesListItem } from '../../models/courses-list-item.model';
import { Observable, of } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private http:HttpClient) { }

  getCourses(params ): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(BASE_URL, {params});
  }

  removeCourseItem(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/${id}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(`${BASE_URL}`, course);
  }

  getItemById(id: number): Observable<CoursesListItem> {
    return this.http.get<CoursesListItem>(`${BASE_URL}/${id}`);
  }

  updateItem(id: number, updatedCourse: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${id}`, updatedCourse);
  }
}
