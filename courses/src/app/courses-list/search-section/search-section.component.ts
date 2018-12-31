import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {
  public searchRequest:string;

  constructor() { }

  ngOnInit() {
  }

  onSearchClick(): void {
    console.log(this.searchRequest);
  }

}
