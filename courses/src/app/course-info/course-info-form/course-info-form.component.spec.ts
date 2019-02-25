import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoFormComponent } from './course-info-form.component';

describe('CourseInfoFormComponent', () => {
  let component: CourseInfoFormComponent;
  let fixture: ComponentFixture<CourseInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
