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
      date: "2018-11-22T17:23:43.348Z",
      duration: 48,
      description: "This is video 1"
    },
    {
      id: 2,
      title: "Video 2", 
      date: "2018-10-30T15:07:13.348Z",
      duration: 59,
      description: "This is video 2"
    },
    {
      id: 3,
      title: "Video 3", 
      date: "2018-10-02T15:55:24.348Z",
      duration: 35,
      description: "This is video 3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
