import { Component, OnInit } from '@angular/core';
import {RestService} from '@app/service/global/request/rest-service.service';
import {Constants} from '@app/constants/constants';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emails = [];
  numberEmails = 0;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {
    this.getShortMessages(1);
    this.getNumberEmailsForUser();
  }

  async getShortMessages(page) {
    const url = Constants.SERVER_PROXY + '/email/get-received?' +
      'userId=' + localStorage.getItem(Constants.UserId) + '&' +
      'limit=' + 10 + '&' +
      'offset=' + (page - 1) * 10;

    const response = await this.restService.get<Array<any>>(url);
    this.emails = response.result;
  }

  async getNumberEmailsForUser() {
    const url = Constants.SERVER_PROXY + '/email/get/number?' +
      'userId=' + localStorage.getItem(Constants.UserId);
    const response = await this.restService.get<number>(url);
    this.numberEmails = response.result;
  }

  getFirstLettersMsg(msg) {
    const maxCharactersCount = 30;
    if (msg.length > maxCharactersCount) {
      return  msg.substring(0, 30) + '...';
    } else {
      return msg;
    }
  }

  goToEmail(i) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'email': JSON.stringify(this.emails[i])
      }
    };

    this.router.navigate(['admin/email/show'],  navigationExtras);
  }
}
