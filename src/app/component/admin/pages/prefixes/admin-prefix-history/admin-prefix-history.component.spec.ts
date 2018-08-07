import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrefixHistoryComponent } from './admin-prefix-history.component';

describe('AdminPrefixHistoryComponent', () => {
  let component: AdminPrefixHistoryComponent;
  let fixture: ComponentFixture<AdminPrefixHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrefixHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrefixHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
