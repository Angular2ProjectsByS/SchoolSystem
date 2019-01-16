import { RestService } from '@app/service/global/request/rest-service.service';
import { Constants } from './../../../../constants/constants';
import { UserValidationPattern } from '@app/component/admin/user/service/model/user-validation-pattern';

import { UserParams } from './UserParams';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ViewService } from '@app/component/admin/user/user-search/ViewService';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { User } from '@app/component/admin/user/model/user';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [ViewService, UserValidService, UserValidationPattern]
})
export class UserSearchComponent implements OnInit {

  userParams : UserParams = new UserParams();
  @Input() params : string = "";
  @Output() sendFoundUsers: EventEmitter<User[]> = new EventEmitter<User[]>();
  @Output() deleteFoundUsers : EventEmitter<null> = new EventEmitter();

  constructor(private viewService : ViewService, private restService : RestService) { }

  ngOnInit() {}


  onSearchButtonClick() {
    console.log("onSerachButtonClick");
    let isValidOk =  this.viewService.validateUserParamsSearch(this.userParams);

    console.log("walidacja: " + isValidOk);

    if (isValidOk) {
      this.getUsersByRestAndPass();
    } 
  }


  async getUsersByRestAndPass() {
      let foundUsers = await this.searchUsers();
      this.sendFoundUsers.emit(foundUsers);
  }

  async searchUsers() {
    let url = Constants.SERVER_PROXY + "/users/find?role=";
    console.log("Params: ");
    console.log(this.params);
    if (this.params != null) {
      url += this.params;
    }
    console.log("search element");
    let response = await this.restService.post<User[]>(url, this.userParams);
    console.log(response.result);
    this.viewService.checkResponseCode(response);
    this.viewService.checkResponseResult(response);
    
    return response.result;
  }

}
