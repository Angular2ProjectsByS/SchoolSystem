import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../model/school-classes/details/prefix';
import { Constants } from '../../../../constants/constants';
import { ViewEncapsulation } from "@angular/core";
import { ModalData } from '../../../../model/view/ModalData';
import { URLS } from '../../../../constants/urls';
import { EventEmitter } from 'protractor';
import { TwoButtonsModalComponent } from '../../../common/two-buttons-modal/two-buttons-modal.component';

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = false;
  errorMessage: string;
  prefixes : Prefix[];
  modalData : ModalData;
  prefixToDeletePosition : number;
  @ViewChild("twoButtonsModal") twoButtonsModal: TwoButtonsModalComponent;

  constructor(private restService : RestService) {
    this.initModalData();
    this.loadAllPrefixes();
  }

  ngOnInit() {
    
  }

  private initModalData():void {
    this.modalData = new ModalData();
    this.modalData.title = "";
    this.modalData.body = "";
    this.modalData.url = "";
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
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  showDeleteModal(index) {
    this.setupModalData(index);
    this.prefixToDeletePosition = index;
    this.twoButtonsModal.showModal();
  }

  sendDeletePrfixRequest() {
    console.log("Wysyłam żądanie usunięcia");
  }

}
