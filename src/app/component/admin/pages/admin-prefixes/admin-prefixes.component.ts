import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../model/school-classes/details/prefix';
import { ModalData } from '../../../../model/view/ModalData';
import { URLS } from '../../../../constants/urls';
import { TwoButtonsModalComponent } from '../../../common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '../../../../model/request/result-request';
import { Constants } from '../../../../constants/constants';

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = false;
  banerMessage: string;
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
    let resultRequestSet = await this.restService.get<Prefix>(url);
    this.prefixes = resultRequestSet.result;
    this.checkResponseCode(resultRequestSet);
  }

  private checkResponseCode(requestResult : ResultRequest) {
      if (requestResult.responseCode >= 400) {
        this.noPrefixes = true;
        this.setProperMessageBanerContent(requestResult);
      }
      else {
        this.noPrefixes = false;
        this.banerMessage = null;
      }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest) {
    if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      this.banerMessage = Constants.LOADING_SCH_PREFIXES_ERROR + Constants.MESSAGE_ERROR_400;
    }
    else if (requestResult.responseCode >= 500) {
      this.banerMessage = Constants.LOADING_SCH_PREFIXES_ERROR + Constants.MESSAGE_ERROR_500;
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
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let success = this.restService.delete(url);
  }



}
