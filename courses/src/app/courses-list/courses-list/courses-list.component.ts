import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  private twoDays = 2*24*3600*1000;

  public coursesList: CoursesListItem [] = [
    {
      id: 1,
      title: "Video 1", 
      date: new Date(+new Date() + this.twoDays), // upcomming
      duration: 48,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 2,
      title: "Video 2", 
      date: new Date(+new Date() - this.twoDays),  // fresh
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: false,
    },
    {
      id: 3,
      title: "Video 3", 
      date: new Date(+new Date() - (8 * this.twoDays)),   // old
      duration: 35,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 4,
      title: "Video 4", 
      date: new Date(25, 10, 18),
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: true,
    },
    {
      id: 5,
      title: "Video 5", 
      date: new Date(13, 12, 18),
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      topRated: false,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onSeeMoreClick(): void{
    console.log("See more");
  }

  onCourseItemDelete(itemId:number): void{
    console.log(itemId);
  }

}
