import { Component, OnInit } from '@angular/core';
import {RestService} from '@app/service/global/request/rest-service.service';
import {Constants} from '@app/constants/constants';
// @ts-ignore
import moment = require('moment');
declare var $: any;

@Component({
  selector: 'app-t-occugroup-credit',
  templateUrl: './t-occugroup-credit.component.html',
  styleUrls: ['./t-occugroup-credit.component.css']
})
export class TOccugroupCreditComponent implements OnInit {

  creditTypes: any = [];
  credit: any = {};

  options = {
    format: 'DD.MM.YYYY',
    maxDate: moment(),
    minDate: '2018-01-01',
  };

  constructor(private restService: RestService) { }

  async ngOnInit() {
    this.creditTypes = await this.getDetails(Constants.SERVER_PROXY + '/credit-type/get/all');
    this.credit.creditType = this.creditTypes[0];
    console.log(this.creditTypes);
    // this.initDateTimePicker();
  }

  async getDetails(url) {
    const res = await this.restService.get<any>(url);
    console.log(res);
    console.log(res.result[0]);
    return res.result;
  }

  initDateTimePicker() {
    $(function () {
      $('#datetimepicker1').datetimepicker();
    });
  }

  update() {

  }

}
