import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassMoreInfoComponent } from './school-class-more-info.component';

describe('SchoolClassMoreInfoComponent', () => {
  let component: SchoolClassMoreInfoComponent;
  let fixture: ComponentFixture<SchoolClassMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
