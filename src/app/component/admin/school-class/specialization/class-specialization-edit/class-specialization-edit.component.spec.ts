import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSpecializationEditComponent } from './class-specialization-edit.component';

describe('ClassSpecializationEditComponent', () => {
  let component: ClassSpecializationEditComponent;
  let fixture: ComponentFixture<ClassSpecializationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSpecializationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSpecializationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
