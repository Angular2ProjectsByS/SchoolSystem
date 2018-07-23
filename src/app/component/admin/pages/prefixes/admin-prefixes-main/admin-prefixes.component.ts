import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Prefix } from '@app/model/school-classes/details/prefix';
import { ModalData } from '@app/model/view/ModalData';
import { URLS } from '@app/constants/urls';
import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '@app/model/request/result-request';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';

declare var $ : any;

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
  showAddForm : boolean = false;
  private editingPrefixIndex : number = -1;
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
    let resultRequestSet = await this.restService.get<Prefix>(url + "fdasfad");
    this.prefixes = resultRequestSet.result;
    console.log("loadAllPrefixes: Sprawdzam kod odpowiedzi.");
    this.checkResponseCode(resultRequestSet);
    this.checkPrefixesExists(resultRequestSet);
  }

  showDeleteModal(index) {
    this.setupModalData(index);
    this.prefixToDeletePosition = index;
    this.twoButtonsModal.showModal();
  }


  private checkResponseCode(requestResult : ResultRequest) {
      if (requestResult.responseCode >= 400) {
        console.log("checkResponseCode: Mamy błąd powyżej 400");
        console.log("Code: " + requestResult.responseCode);
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
            Constants.NO_SCH_PREFIXES_MESSAGE,
            Constants.ALERT_STYLES.ALERT_WARNING
          );
      }
    }
  }

  private setupModalData(index) {
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  async deletePrfixRequest() {
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = await this.restService.delete(url);
    this.setProperMessageBanerContent(response, Constants.DELETING_PREFIX_FAILURE_MESSAGE, true);
    if (response.responseCode == 200) {
      this.loadAllPrefixes(); 
    }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest, errorString: string, showSuccess : boolean) {
    if (showSuccess) {
      if (requestResult.responseCode == 200) {
        this.banerInfo = new BannerMessageInfo();
        this.banerInfo
          .setAll(
            Constants.REQUEST_SUCCESS_MESSAGE,
            Constants.ALERT_STYLES.ALERT_SUCCESS
          );
      }
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      this.banerInfo = new BannerMessageInfo();

      this.banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400,
          Constants.ALERT_STYLES.ALERT_DANGER);
    }
    else if (requestResult.responseCode >= 500) {
      console.log("setProperMessageBannerContent: ustawiam bannerInfo na błąd dla 500");
      
      this.banerInfo = new BannerMessageInfo();
      this.banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400,
          Constants.ALERT_STYLES.ALERT_DANGER);
    }
  }

  showAddSetMessageResult(banerInfo) {
    console.log("Rezultat zbioru: ");
    console.log(banerInfo);
    
    this.banerInfo = banerInfo;
  }

  editSection(i) {
    if (this.editingPrefixIndex < 0) {
      $("#editPrefixSection" + i).attr("hidden", false);
      this.editingPrefixIndex = i;
    }
    else if (this.editingPrefixIndex == i) {
      let hidden = $("#editPrefixSection" + i).attr("hidden");

      if (hidden === undefined) {
        $("#editPrefixSection" + i).attr("hidden", true);
      }
      else {
        $("#editPrefixSection" + i).attr("hidden", false);
      }
    }
    else {
      $("#editPrefixSection" + this.editingPrefixIndex).attr("hidden", true);
      $("#editPrefixSection" + i).attr("hidden", false);
      this.editingPrefixIndex = i;
    }

  }



}
