import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolClassComponent } from './add-school-class.component';

describe('AddSchoolClassComponent', () => {
  let component: AddSchoolClassComponent;
  let fixture: ComponentFixture<AddSchoolClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchoolClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
