import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrefixesComponent } from './admin-prefixes.component';

describe('AdminPrefixesComponent', () => {
  let component: AdminPrefixesComponent;
  let fixture: ComponentFixture<AdminPrefixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrefixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
