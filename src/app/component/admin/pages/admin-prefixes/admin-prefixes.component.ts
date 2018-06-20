import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../model/school-classes/details/prefix';
import { Constants } from '../../../../constants/constants';

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = false;
  errorMessage : string;
  prefixes : Prefix[];

  constructor(private restService : RestService) { }

  ngOnInit() {
    this.loadAllPrefixes();
  }

  private async loadAllPrefixes() {
    console.log("Load prefixes");
    let url = "/rest/api/" + "class-prefixex/get/all";
    let result =  await this.restService.get<Prefix>(url);
    console.log("Result: ");
    console.log(result);
  }

}
