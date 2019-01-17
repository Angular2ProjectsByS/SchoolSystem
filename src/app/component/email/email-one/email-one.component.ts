import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Constants} from '@app/constants/constants';
import {RestService} from '@app/service/global/request/rest-service.service';

@Component({
  selector: 'app-email-one',
  templateUrl: './email-one.component.html',
  styleUrls: ['./email-one.component.css']
})
export class EmailOneComponent implements OnInit {

  email: any;
  content: any;

  constructor(private route: ActivatedRoute, private restService: RestService) { }

  ngOnInit(): void {
    // super.ngOnInit();

    this.route.queryParams.subscribe(params => {
      this.email = JSON.parse(params['email']);
      console.log(this.email);
    });
    this.getEmailContent(this.email.id)
  }

  async getEmailContent(emailId) {
    const url = Constants.SERVER_PROXY + '/email/get/' + emailId + '/content';
    const response = await this.restService.get<string>(url);
    this.content = response.result;
    console.log(this.content);
  }
}
