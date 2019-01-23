import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOrgGroupComponent } from './t-org-group.component';

describe('TOrgGroupComponent', () => {
  let component: TOrgGroupComponent;
  let fixture: ComponentFixture<TOrgGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOrgGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOrgGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
