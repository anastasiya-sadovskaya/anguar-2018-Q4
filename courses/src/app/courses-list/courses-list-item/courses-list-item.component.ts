import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public coursesItem: CoursesListItem;
  @Output() public courseItemDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(e){
    this.courseItemDelete.emit(this.coursesItem.id);
  }

}
