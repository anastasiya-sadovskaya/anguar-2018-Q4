import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CourseItem } from './../../shared/classes-implementing/classes-implementing';

@Component({
  template: `<app-courses-list-item [coursesItem]="course" (courseItemDelete)="onCourseItemDelete()" ></app-courses-list-item>`
})
class TestHostComponent {
  course: CourseItem ;
  public onCourseItemDelete() {}
}


describe('CoursesListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.course = new CourseItem(6, 'Video 6', new Date(11, 11, 18), 120, 'Lorem ipsum dolor sit amet', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should display proper course item', () => {
    let courseItem;

    beforeEach(() => {
      courseItem = fixture.debugElement.query(By.css('.course-list-item')).nativeElement;
    });

    it('name', () => {
      expect(courseItem.querySelector('.name').textContent).toBe('Video 6');
    });

    it('date', () => {
      expect(courseItem.querySelector('.date').textContent).toBe('Nov 11, 2018');
    });

    it('length', () => {
      expect(courseItem.querySelector('.length').textContent).toBe('120 mins');
    });

    it('description', () => {
      expect(courseItem.querySelector('.description').textContent).toBe('Lorem ipsum dolor sit amet');
    });
  });

  it('Click on delete button should rise event', () => {
    const deleteBtnElement: HTMLButtonElement = fixture.nativeElement.querySelector('#deleteCourseItemBtn');
    spyOn(component, 'onCourseItemDelete');
    deleteBtnElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.onCourseItemDelete).toHaveBeenCalled();
  });
});
