
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';
import { UserValidService } from './../service/user-valid-service/user-valid-service';
import { UserToEditParam } from './user-to-edit-param';
import { AddEditUserBaseComponent } from '@app/component/admin/user/add-edit-user-base-comp/AddEditUserBaseComponent';
import { Component, OnInit } from '@angular/core';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Constants } from '@app/constants/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: '../templates/add-edit-form/admin-edit-add-user.template.html',
  styleUrls: ['../templates/add-edit-form/admin-edit-add-user.template.css'],
  providers: [UserToEditParam, ViewService, UserValidService, UserValidationPattern]
})
export class AdminUserEditComponent extends AddEditUserBaseComponent {
  

  operationName : string = "Edytuj";
  
  constructor(restService : RestService, viewService : ViewService, private route: ActivatedRoute) {
    super(restService, viewService);

    
  }

  async sendUser() {
    this.performUserOperation(Constants.SERVER_PROXY + "/update-user");
  }

  ngOnInit(): void {
    super.ngOnInit();

      this.route.queryParams.subscribe(params => {
        this.user = JSON.parse(params["user"]);
      });
  }

}
