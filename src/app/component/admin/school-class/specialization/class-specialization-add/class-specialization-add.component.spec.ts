import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSpecializationAddComponent } from './class-specialization-add.component';

describe('ClassSpecializationAddComponent', () => {
  let component: ClassSpecializationAddComponent;
  let fixture: ComponentFixture<ClassSpecializationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSpecializationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSpecializationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
