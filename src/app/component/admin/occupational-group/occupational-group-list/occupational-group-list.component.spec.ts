import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalGroupListComponent } from './occupational-group-list.component';

describe('OccupationalGroupListComponent', () => {
  let component: OccupationalGroupListComponent;
  let fixture: ComponentFixture<OccupationalGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationalGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationalGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
