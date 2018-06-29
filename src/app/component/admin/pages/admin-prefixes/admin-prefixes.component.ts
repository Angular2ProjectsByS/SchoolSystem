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

  constructor(private restService : RestService) {
    this.loadAllPrefixes();
  }

  ngOnInit() {
    
  }

  private async loadAllPrefixes() {
    console.log("Load prefixes");
    let url = "/rest/api/" + "class-prefixex/get/all";
    this.prefixes =  await this.restService.get<Prefix>(url);
    this.setNoPrefixesMessage();
  }

  private setNoPrefixesMessage() {
    if (this.prefixes != null) {
      console.log("Result: ");
      console.log(this.prefixes);
      this.noPrefixes = false;
    }
    else {
      this.noPrefixes = true;
    }
  }
}
