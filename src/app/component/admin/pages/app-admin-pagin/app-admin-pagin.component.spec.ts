import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminPaginComponent } from './app-admin-pagin.component';

describe('AppAdminPaginComponent', () => {
  let component: AppAdminPaginComponent;
  let fixture: ComponentFixture<AppAdminPaginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminPaginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminPaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
