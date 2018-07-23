import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrefixesAddComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-add/admin-prefixes-add.component';

describe('AdminPrefixesAddComponent', () => {
  let component: AdminPrefixesAddComponent;
  let fixture: ComponentFixture<AdminPrefixesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrefixesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrefixesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
