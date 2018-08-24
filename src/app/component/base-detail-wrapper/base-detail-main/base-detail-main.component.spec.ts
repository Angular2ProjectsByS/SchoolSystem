import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDetailMainComponent } from './base-detail-main.component';

describe('BaseDetailMainComponent', () => {
  let component: BaseDetailMainComponent;
  let fixture: ComponentFixture<BaseDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDetailMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
