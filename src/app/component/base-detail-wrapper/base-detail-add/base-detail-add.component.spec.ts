import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDetailAddComponent } from './base-detail-add.component';

describe('BaseDetailAddComponent', () => {
  let component: BaseDetailAddComponent;
  let fixture: ComponentFixture<BaseDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
