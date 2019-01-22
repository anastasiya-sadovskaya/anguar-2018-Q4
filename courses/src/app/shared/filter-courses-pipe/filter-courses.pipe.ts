import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from './../classes-implementing/classes-implementing'

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: CourseItem[], searchReq: string): any {
    if (!courses) {
      return [];
    }

    if (!searchReq) {
      return courses;
    }
      return courses.filter((course: CourseItem) => course.title.replace(/\s/g, '').toLowerCase().indexOf(searchReq.replace(/\s/g, '').toLowerCase()) !== -1
    );
  }

}
