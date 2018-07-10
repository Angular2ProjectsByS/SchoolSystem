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
    let url = URLS.prefixes.getAll;
    let resultRequestSet = await this.restService.get<Prefix>(url);
    this.prefixes = resultRequestSet.result;
    this.checkResponseCode(resultRequestSet);
    this.checkPrefixesExists(resultRequestSet);
  }

  private checkResponseCode(requestResult : ResultRequest) {
      if (requestResult.responseCode >= 400) {
        this.noPrefixes = true;
        this.setProperMessageBanerContent(requestResult, Constants.LOADING_SCH_PREFIXES_ERROR, false);
      }
      else {
        this.noPrefixes = false;
        this.banerInfo = null;
      }
  }

  private checkPrefixesExists(resultRequest) {
    if (resultRequest.responseCode == 200) {
      if (resultRequest.result.length == 0) {
        

        this.noPrefixes = true;
        this.banerInfo = new BannerMessageInfo();

        this.banerInfo
          .setAll(
            "Brak prefiksów w bazie",
            Constants.ALERT_STYLES.ALERT_WARNING
          );
      }
    }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest, errorString: string, showSuccess : boolean) {
    if (showSuccess) {
      if (requestResult.responseCode == 200) {
        this.banerInfo = new BannerMessageInfo();
        this.banerInfo
          .setAll(
            "Czynność zakończona powodzeniem",
            Constants.ALERT_STYLES.ALERT_SUCCESS
          );
      }
    }
    if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      this.banerInfo = new BannerMessageInfo();

      this.banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400, 
          Constants.ALERT_STYLES.ALERT_DANGER);
    }
    else if (requestResult.responseCode >= 500) {
      this.banerInfo = new BannerMessageInfo();
      
      this.banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_500, 
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

  async sendDeletePrfixRequest() {
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = await this.restService.delete(url);
    this.setProperMessageBanerContent(response, "Niepowodzenie usunięcia prefiksu.", true);
    if (response.responseCode != 200) {
      this.loadAllPrefixes(); 
    }
  }



}
