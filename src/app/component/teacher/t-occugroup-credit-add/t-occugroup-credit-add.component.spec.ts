import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOccugroupCreditAddComponent } from './t-occugroup-credit-add.component';

describe('TOccugroupCreditAddComponent', () => {
  let component: TOccugroupCreditAddComponent;
  let fixture: ComponentFixture<TOccugroupCreditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOccugroupCreditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOccugroupCreditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
