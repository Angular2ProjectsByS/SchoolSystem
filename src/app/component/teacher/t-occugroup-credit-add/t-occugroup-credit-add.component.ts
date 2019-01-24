import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/constants/constants';
import {RestService} from '@app/service/global/request/rest-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-t-occugroup-credit-add',
  templateUrl: './t-occugroup-credit-add.component.html',
  styleUrls: ['./t-occugroup-credit-add.component.css']
})
export class TOccugroupCreditAddComponent implements OnInit {

  creditTypes: any = [];
  credit: any = {};
  occuGroup: any = {};

  constructor(private restService: RestService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.creditTypes = await this.getDetails(Constants.SERVER_PROXY + '/credit-type/get/all');
    this.credit.creditType = this.creditTypes[0];
    this.route.queryParams.subscribe(params => {
      this.credit.occupationalGroup = JSON.parse(params['occuGroup']);
    });
    console.log(this.creditTypes);
  }

  async getDetails(url) {
    const res = await this.restService.get<any>(url);
    console.log(res);
    console.log(res.result[0]);
    return res.result;
  }

  async addOccupationalGroup() {
    console.log(this.credit);
    const url = Constants.SERVER_PROXY + '/credit/add';
    const response = await this.restService.post(url, this.credit);
    if (response.responseCode === 200) {
      alert('Dodanie zaliczenia zakończone powodzeniem.');
    } else {
      alert('Niepowodzenie dodania zaliczenia');
    }
  }
}
