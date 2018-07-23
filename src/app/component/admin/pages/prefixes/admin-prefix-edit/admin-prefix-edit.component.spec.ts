import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrefixEditComponent } from '@app/component/admin/pages/prefixes/admin-prefix-edit/admin-prefix-edit.component';

describe('AdminPrefixEditComponent', () => {
  let component: AdminPrefixEditComponent;
  let fixture: ComponentFixture<AdminPrefixEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrefixEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrefixEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
