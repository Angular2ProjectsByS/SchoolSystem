import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainPageComponent } from '@app/component/admin/main-page/admin-main-page.component';

describe('AdminMainPageComponent', () => {
  let component: AdminMainPageComponent;
  let fixture: ComponentFixture<AdminMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
