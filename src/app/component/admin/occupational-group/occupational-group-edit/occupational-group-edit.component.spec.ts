import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalGroupEditComponent } from './occupational-group-edit.component';

describe('OccupationalGroupEditComponent', () => {
  let component: OccupationalGroupEditComponent;
  let fixture: ComponentFixture<OccupationalGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationalGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationalGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
