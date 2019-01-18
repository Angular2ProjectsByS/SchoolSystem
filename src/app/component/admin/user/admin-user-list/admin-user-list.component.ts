
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

  users: User[];
  viewService: ViewService;
  title = 'Użytkownicy';
  userNumber = 0;

  constructor(private restService: RestService, viewService: ViewService, private router: Router) {
    this.viewService = viewService;
  }

  async getAllUsers() {
    const response = await this.restService.get<User[]>(Constants.SERVER_PROXY + '/users/get/all');
    console.log('getAllUsers');
    console.log(response);
    this.users = response.result;
  }

  async getUsersByPagination(pageNr) {
    const url = Constants.SERVER_PROXY + '/users/get?limit=10' +
      '&offset=' + pageNr * 10;
    const response = await this.restService.get<User[]>(url);
    this.users = response.result;
    console.log(response);
  }

  async getNumberOfUser() {
    const url = Constants.SERVER_PROXY + '/users/number';
    const response = await this.restService.get<number>(url);
    this.userNumber = response.result;
    console.log(this.userNumber);
  }

  modifyUser(i) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
          'user': JSON.stringify(this.users[i])
      }
    };

    this.router.navigate(['admin/user/edit'],  navigationExtras);
  }

  async showDeleteModal(index) {
    if (confirm('Czy na pewno chcesz usunąć użytkownika?')) {
      const code = await this.deleteUser(index);
      if (code === 200) {
        this.users.splice(index, 1);
      } else {
        alert('Nie udało się usunąć użytkownika');
      }
    }
  }

  async deleteUser(index) {
    const url = Constants.SERVER_PROXY + '/users/delete/' + this.users[index].id;
    const response = await this.restService.delete(url);
    return response.responseCode;
  }

  getFoundUser(data) {
    this.users = data;
    this.userNumber = this.users.length;
  }

  async ngOnInit() {
    await this.getNumberOfUser();
    if (this.userNumber !== 0) {
      await this.getUsersByPagination(0);
    }
  }

}
