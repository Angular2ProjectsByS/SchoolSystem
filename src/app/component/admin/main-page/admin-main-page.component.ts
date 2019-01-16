import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {RestService} from '@app/service/global/request/rest-service.service';
import {Constants} from '@app/constants/constants';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  isUnreadMsg = false;

  constructor(private restService: RestService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.dropdown-item').click(function() {
          $('.navbar-toggler').click();
      });
  });
    this.checkUnreadEmails();
  }

  async checkUnreadEmails() {
    const url = Constants.SERVER_PROXY + '/email/get-unread-count' + '?userId=' + localStorage.getItem(Constants.UserId);
    const response = await this.restService.get<boolean>(url);
    this.isUnreadMsg = response.result;
  }

}
