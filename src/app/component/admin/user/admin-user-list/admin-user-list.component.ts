
import { RestService } from '@app/service/global/request/rest-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@app/component/admin/user/model/user';
import { Constants } from '@app/constants/constants';
import { Route, Router, NavigationExtras } from '@angular/router';
import { ViewService } from '@app/component/admin/user/admin-user-list/view-service';


@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css'],
  providers: [ViewService]
})
export class AdminUserListComponent implements OnInit {

  users : User[];
  viewService : ViewService;
  title : string = "Uzytkownicy";

  constructor(private restService: RestService, viewService: ViewService, private router : Router) { 
    this.viewService = viewService;
  }

  async getAllUsers() {
    let response = await this.restService.get<User>(Constants.SERVER_PROXY + "/users/get/all");
    this.users = response.result;
    console.log(response);
  }

  modifyUser(i) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "user": JSON.stringify(this.users[i])
      }
    };

    this.router.navigate(["admin/user/edit"],  navigationExtras);
  }

  async ngOnInit() {
    await this.getAllUsers();
  }

}
