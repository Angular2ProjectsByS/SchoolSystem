import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../model/school-classes/details/prefix';
import { ModalData } from '../../../../model/view/ModalData';
import { URLS } from '../../../../constants/urls';
import { TwoButtonsModalComponent } from '../../../common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '../../../../model/request/result-request';
import { Constants } from '../../../../constants/constants';
import { BannerMessageInfo } from '../../../../model/view/banner-message-info';

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = false;
  banerInfo: BannerMessageInfo;
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
        this.banerInfo = null;
      }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest) {
    if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      this.banerInfo = new BannerMessageInfo();

      this.banerInfo
        .setAll(
          Constants.LOADING_SCH_PREFIXES_ERROR + Constants.MESSAGE_ERROR_400, 
          Constants.ALERT_STYLES.ALERT_DANGER);
    }
    else if (requestResult.responseCode >= 500) {
      this.banerInfo = new BannerMessageInfo();
      
      this.banerInfo
        .setAll(
          Constants.LOADING_SCH_PREFIXES_ERROR + Constants.MESSAGE_ERROR_500, 
          Constants.ALERT_STYLES.ALERT_DANGER);

    }
  }

  showDeleteModal(index) {
    this.setupModalData(index);
    this.prefixToDeletePosition = index;
    this.twoButtonsModal.showModal();
  }

  private setupModalData(index) {
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  sendDeletePrfixRequest() {
    console.log("Wysyłam żądanie usunięcia");
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = this.restService.delete(url);
  }



}
