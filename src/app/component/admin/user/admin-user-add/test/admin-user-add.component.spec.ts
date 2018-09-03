import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddComponent } from '@app/component/admin/user/admin-user-add/admin-user-add.component';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { RestService } from '@app/service/global/request/rest-service.service';
import { HttpClient } from '@app/service/global/request/http-client';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';


fdescribe('AdminUserAddComponent', () => {
  let component: AdminUserAddComponent;
  let fixture: ComponentFixture<AdminUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        RestService, 
        UserValidService, 
        ViewService, 
        HttpClient,  
        ConnectionBackend,
        UserValidationPattern
      ],
      declarations: [ AdminUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
