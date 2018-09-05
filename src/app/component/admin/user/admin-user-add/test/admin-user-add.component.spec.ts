import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddComponent } from '@app/component/admin/user/admin-user-add/admin-user-add.component';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { RestService } from '@app/service/global/request/rest-service.service';
import { HttpClient } from '@app/service/global/request/http-client';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';
import { User } from '@app/component/admin/user/model/user';
import { AddResultResponse } from '@app/model/request/add-result-response';
import { BasicInfo } from '@app/component/admin/user/model/user-info/basic-info';
import { ContactInfo } from '@app/component/admin/user/model/user-info/contact-info';
import { Address } from '@app/component/admin/user/model/user-info/address';
import { Street } from '@app/component/admin/user/model/user-info/address-info.ts/street';
import { City } from '@app/component/admin/user/model/user-info/address-info.ts/city';
import { ZipCode } from '@app/component/admin/user/model/user-info/address-info.ts/zip-code';
import { Voivodeship } from '@app/component/admin/user/model/user-info/address-info.ts/voivodeship';
import { BornInfo } from '@app/component/admin/user/model/user-info/born-info';
import { LoginService } from '@app/service/login.service';
import { inject } from '@angular/core';


fdescribe('AdminUserAddComponent', () => {
  let component: AdminUserAddComponent;
  let fixture: ComponentFixture<AdminUserAddComponent>;
  let token: string;
  let loginService : LoginService;

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
        UserValidationPattern,
        Http
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

  it("add proper user", async () => {
    // let loginService = new LoginService();
    let properUser = createProperUser();
    let result : AddResultResponse<User>  = await component.addUserToDb(properUser);
    console.log(result);
    expect(result.responseCode).toBe(200);
  });


  function createProperUser() {
    let user = new User();

    user.basicInfo = new BasicInfo();
    user.basicInfo.firstName = "Dariusz";
    user.basicInfo.lastName = "Nurzyński";
    user.basicInfo.pesel = "91789565789";

    user.contactInfo = new ContactInfo();
    user.contactInfo.phoneNumber = "502037189";
    user.contactInfo.email = "dd@gmail.com";
    
    user.contactInfo.address = new Address();
    user.contactInfo.address.houserNumber = "5";
    user.contactInfo.address.apartmentNumber = "15";
    user.contactInfo.address.street = new Street("Fajowo");
    user.contactInfo.address.city = new City("Chorów");
    user.contactInfo.address.zipCode = new ZipCode("25-777");
    user.contactInfo.address.voivodeship = new Voivodeship("Magiczne");
    
    user.bornInfo = new BornInfo();
    user.bornInfo.city = new City("Fujka");
    user.bornInfo.voivodeship = new City("Zwykłe");
    user.bornInfo.bornDate = new Date("2018-08-08");

    return user;
  }

});

