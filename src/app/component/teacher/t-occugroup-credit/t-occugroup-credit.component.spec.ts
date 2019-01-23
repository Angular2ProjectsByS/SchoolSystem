import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOccugroupCreditComponent } from './t-occugroup-credit.component';

describe('TOccugroupCreditComponent', () => {
  let component: TOccugroupCreditComponent;
  let fixture: ComponentFixture<TOccugroupCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOccugroupCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOccugroupCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
