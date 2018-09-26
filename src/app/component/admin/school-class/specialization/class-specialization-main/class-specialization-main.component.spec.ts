import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSpecializationMainComponent } from './class-specialization-main.component';

describe('ClassSpecializationMainComponent', () => {
  let component: ClassSpecializationMainComponent;
  let fixture: ComponentFixture<ClassSpecializationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSpecializationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSpecializationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
