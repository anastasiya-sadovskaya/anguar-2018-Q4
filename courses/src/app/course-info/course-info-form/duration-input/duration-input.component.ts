import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {
  @Input() parentForm: FormGroup;
  
  constructor() { }

  ngOnInit() { }
}
