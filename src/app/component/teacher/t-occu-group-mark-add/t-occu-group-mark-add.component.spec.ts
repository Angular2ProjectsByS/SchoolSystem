import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOccuGroupMarkAddComponent } from './t-occu-group-mark-add.component';

describe('TOccuGroupMarkAddComponent', () => {
  let component: TOccuGroupMarkAddComponent;
  let fixture: ComponentFixture<TOccuGroupMarkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOccuGroupMarkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOccuGroupMarkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
