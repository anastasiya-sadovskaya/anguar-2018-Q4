import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent {
  public searchRequest: string;

  @Output() public searchVideo = new EventEmitter<string>();
  @Output() public addCourse = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSearchClickHandler(): void {
    this.searchVideo.emit(this.searchRequest);
  }

  onAddClickHandler() {
    this.router.navigate(['/new']);
  }
}
