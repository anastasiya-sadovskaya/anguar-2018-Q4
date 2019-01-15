import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesList: CoursesListItem [] = [
    {
      id: 1,
      title: "Video 1", 
      date: "2018-11-11T15:22:22.348Z",
      duration: 48,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      title: "Video 2", 
      date: "2018-10-30T15:07:13.348Z",
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      title: "Video 3", 
      date: "2018-10-02T15:55:24.348Z",
      duration: 35,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      id: 4,
      title: "Video 4", 
      date: "2018-09-30T12:45:44.348Z",
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      id: 5,
      title: "Video 5", 
      date: "2018-09-18T13:13:13.348Z",
      duration: 59,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
