import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SearchSectionComponent } from './search-section.component';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchSectionComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click on search button should log text from input', () => {
    const req: string = 'some request';
    const searchInputElement: HTMLInputElement = fixture.nativeElement.querySelector('#searchInput');
    const searchBtnElement: HTMLButtonElement = fixture.nativeElement.querySelector('#searchBtn');

    spyOn(component, 'onClickHandler');
    searchInputElement.value = req;
    fixture.detectChanges();

    searchBtnElement.click();
    
    expect(component.onClickHandler).toHaveBeenCalled();
  });  
});
