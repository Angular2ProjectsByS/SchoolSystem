import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../model/school-classes/details/prefix';
import { Constants } from '../../../../constants/constants';
import { ViewEncapsulation } from "@angular/core";
import { ModalData } from '../../../../model/view/ModalData';
import { URLS } from '../../../../constants/urls';

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = false;
  errorMessage : string;
  prefixes : Prefix[];
  modalData : ModalData;

  constructor(private restService : RestService) {
    this.loadAllPrefixes();
  }

  ngOnInit() {
    
  }

  private async loadAllPrefixes() {
    console.log("Load prefixes");
    let url = URLS.prefixes.getAll;
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

  private setupModalData(index) {
    this.modalData.body = "Czy napewno chcesz usunąć prefix \" " 
      + this.prefixes[index].name 
      + " \"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
    this.modalData.url = URLS.prefixes.getOne + "\\" + index;
    console.log("Url do pobrania prefiksu: ");
    console.log(this.modalData.url);
  }

  showDeleteModal(index) {
    this.setupModalData(index);
    console.log("index: " + index);
  }

}
