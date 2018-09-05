import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { Constants } from '@app/constants/constants';
import { User } from '@app/component/admin/user/model/user';
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: '../templates/add-edit-form/admin-edit-add-user.template.html',
  styleUrls: ['../templates/add-edit-form/admin-edit-add-user.template.css'],
  providers: [ViewService, UserValidService, UserValidationPattern]
})
export class AdminUserAddComponent implements OnInit {

  titleSubmitButton : string = "Dodaj";
  viewService : ViewService;

  constructor(private restService : RestService, viewService : ViewService) {
    this.viewService = viewService;  
  }

  getUserInfoFromForm() : User {
    return null;
  }

  public addUser() {
    // if (viewService.validateForm()) {
    //   let user = viewService.getUserInfoFromForm();
    //   let result = await this.addUserToDb();
    //   viewService.showMsgResultAdd(result);
    // }
  }

  public async addUserToDb(user : User)  {
    let url = Constants.SERVER_PROXY + "/users/add";
    let result = await this.restService.add<User>(url, user);
    return result;
  }

  ngOnInit() {
    
  }

}
