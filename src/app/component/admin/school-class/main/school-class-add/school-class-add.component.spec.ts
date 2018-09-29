import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassAddComponent } from './school-class-add.component';

describe('SchoolClassAddComponent', () => {
  let component: SchoolClassAddComponent;
  let fixture: ComponentFixture<SchoolClassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
