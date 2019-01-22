import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent {
  public searchRequest:string;

  @Output() public searchVideo = new EventEmitter<string>();

  onClickHandler(): void {
    this.searchVideo.emit(this.searchRequest);
  }
}
