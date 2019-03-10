import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {
  @Input() length: string;
  @Output() public changeDuration = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onChangeHandler() {
    this.changeDuration.emit(+this.length);
  }

}
