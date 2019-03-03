import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CoursesListItem } from '../../shared/models/courses-list-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() public coursesItem: CoursesListItem;
  @Output() public courseItemDelete = new EventEmitter<number>();
  @Output() public courseItemEdit = new EventEmitter<number>();

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onEditClick() {
    this.router.navigate(['/course', this.coursesItem.id]);
  }

  onDeleteClick() {
    this.courseItemDelete.emit(this.coursesItem.id);
  }

}
