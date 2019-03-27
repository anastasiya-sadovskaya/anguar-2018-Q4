import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent {

  @Input() public searchRequestSubj: Subject<string>;
  @Output() public addCourse = new EventEmitter<string>();

  constructor(private router: Router) {}

  onAddClickHandler() {
    this.router.navigate(['/new']);
  }

  onSearchInputChange(string: string): void {
    if (string.length > 2) {
      this.searchRequestSubj.next(string);
    }
  }
}
