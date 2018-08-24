import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDetailHistoryComponent } from './base-detail-history.component';

describe('BaseDetailHistoryComponent', () => {
  let component: BaseDetailHistoryComponent;
  let fixture: ComponentFixture<BaseDetailHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDetailHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
