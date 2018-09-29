import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundUserListComponent } from './found-user-list.component';

describe('FoundUserListComponent', () => {
  let component: FoundUserListComponent;
  let fixture: ComponentFixture<FoundUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
