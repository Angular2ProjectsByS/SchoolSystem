import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBannerComponent } from '@app/component/common/message-banner/message-banner.component';

describe('ErrorBannerComponent', () => {
  let component: MessageBannerComponent;
  let fixture: ComponentFixture<MessageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
