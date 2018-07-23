import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';

describe('TwoButtonsModalComponent', () => {
  let component: TwoButtonsModalComponent;
  let fixture: ComponentFixture<TwoButtonsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoButtonsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoButtonsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
