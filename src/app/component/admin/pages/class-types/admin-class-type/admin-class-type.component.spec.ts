import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassTypeComponent } from './admin-class-type.component';

describe('AdminClassTypeComponent', () => {
  let component: AdminClassTypeComponent;
  let fixture: ComponentFixture<AdminClassTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
