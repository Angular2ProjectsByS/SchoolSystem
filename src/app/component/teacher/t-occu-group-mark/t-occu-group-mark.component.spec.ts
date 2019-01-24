import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOccuGroupMarkComponent } from './t-occu-group-mark.component';

describe('TOccuGroupMarkComponent', () => {
  let component: TOccuGroupMarkComponent;
  let fixture: ComponentFixture<TOccuGroupMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOccuGroupMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOccuGroupMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
