import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { User } from '@app/model/user';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: '../templates/add-edit-form/admin-edit-add-user.template.html',
  styleUrls: ['../templates/add-edit-form/admin-edit-add-user.template.css']
})
export class AdminUserAddComponent implements OnInit {

  constructor(private restService : RestService, viewService : ViewService, vallidService : UserValidService) { }

  getUserInfoFromForm() : User {
    return null;
  }

  ngOnInit() {
  }

}
