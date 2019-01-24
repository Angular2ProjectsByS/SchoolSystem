import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCreditComponent } from './t-credit.component';

describe('TCreditComponent', () => {
  let component: TCreditComponent;
  let fixture: ComponentFixture<TCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
