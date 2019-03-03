import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() date: string;
  @Output() public changeDate = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() { }

  onChangeHandler() {
    this.changeDate.emit(new Date(this.date));
  }

}
