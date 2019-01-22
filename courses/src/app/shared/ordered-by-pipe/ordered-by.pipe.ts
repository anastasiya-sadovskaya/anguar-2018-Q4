import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from './../classes-implementing/classes-implementing'

@Pipe({
  name: 'orderedBy'
})
export class OrderedByPipe implements PipeTransform {

  transform(courses: CourseItem[], args?: any): any {
    return courses.sort(
      (course1: CourseItem, course2: CourseItem) => +(course2.date) - +(course1.date)
    );
  }

}
