import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDetailEditComponent } from './base-detail-edit.component';

describe('BaseDetailEditComponent', () => {
  let component: BaseDetailEditComponent;
  let fixture: ComponentFixture<BaseDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
