import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTabelComponent } from './entity-table.component';

describe('EntityTabelComponent', () => {
  let component: EntityTabelComponent;
  let fixture: ComponentFixture<EntityTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
