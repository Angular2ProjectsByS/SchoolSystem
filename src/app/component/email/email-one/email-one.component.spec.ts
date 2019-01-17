import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOneComponent } from './email-one.component';

describe('EmailOneComponent', () => {
  let component: EmailOneComponent;
  let fixture: ComponentFixture<EmailOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
