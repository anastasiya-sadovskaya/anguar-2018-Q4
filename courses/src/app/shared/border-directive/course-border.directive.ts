import { Directive, Input, ElementRef, Renderer2, OnInit} from '@angular/core';
import { CoursesListItem } from '../models/courses-list-item.model';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input() appCourseBorder: Date;

  constructor(private el: ElementRef) { }

   ngOnInit() {
    const className2 = this.appCourseBorder;
    const className = this.getState();
    if (className) {
      this.el.nativeElement.classList.add(className);
    }
   }

   getState() {
    const currentDate = +new Date();
    const twoWeeksInMiliSecs = 14 * 24 * 60 * 60 * 1000;
    const freshDate = currentDate - twoWeeksInMiliSecs;

    if (+this.appCourseBorder > currentDate) {
      return 'upcomming';
    }
    if (+this.appCourseBorder > freshDate) {
      return 'fresh';
    }
   }

}
