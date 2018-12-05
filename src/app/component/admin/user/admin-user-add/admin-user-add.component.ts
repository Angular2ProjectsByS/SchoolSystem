import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { Constants } from '@app/constants/constants';
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';
import { AddEditUserBaseComponent } from '@app/component/admin/user/add-edit-user-base-comp/AddEditUserBaseComponent';


@Component({
  selector: 'app-admin-user-add',
  templateUrl: '../templates/add-edit-form/admin-edit-add-user.template.html',
  styleUrls: ['../templates/add-edit-form/admin-edit-add-user.template.css'],
  providers: [ViewService, UserValidService, UserValidationPattern]
})
export class AdminUserAddComponent extends AddEditUserBaseComponent {

  operationName : string = "Dodaj";
  
  constructor(restService : RestService, viewService : ViewService) {
    super(restService, viewService);
  }

  async sendUser() {
    console.log(this.user);
    this.performUserOperation(Constants.SERVER_PROXY + "/users/add");
  }

}
