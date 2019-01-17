import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalGroupAddComponent } from './occupational-group-add.component';

describe('OccupationalGroupAddComponent', () => {
  let component: OccupationalGroupAddComponent;
  let fixture: ComponentFixture<OccupationalGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationalGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationalGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
