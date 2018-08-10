import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Prefix } from '@app/model/school-classes/details/prefix';
import { ModalData } from '@app/model/view/ModalData';
import { URLS } from '@app/constants/urls';
import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '@app/model/request/result-request';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
import { PrefixHistory } from '@app/model/school-classes/details/prefix-history';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { PerfixHistoryLoadMsg } from '@app/messages/prefix-history-load-msg';
import { PrefixRegistry } from "@app/model/school-classes/details/prefix-registry";

declare var $ : any;

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

  noPrefixes: boolean = true;
  banerInfo: BannerMessageInfo;
  prefixes : Prefix[] = [];
  modalData : ModalData;
  prefixToDeletePosition : number;
  showAddForm : boolean = false;
  private editingPrefixIndex : number = -1;
  @ViewChild("twoButtonsModal") twoButtonsModal: TwoButtonsModalComponent;
  isHistoryPrefixViewActive : boolean[] = [];
  loadHistoryErrorMsg: string;

  constructor(private restService : RestService, private bannerService : MessageBannerService) {
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

    console.log("ładuję wszystkie prefiksy");

    let url = URLS.prefixes.getAll;
    let resultRequestSet = await this.restService.get<Prefix>(url);
    

    if (resultRequestSet.responseCode == 200) {
      this.prefixes = resultRequestSet.result;
      this.setUpHistoryViewData();
    }

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
        this.setProperMessageBanerContent(requestResult, Constants.prefixes.loading.failure, false);
      }
      else {
        this.noPrefixes = false;
      }
  }

  private checkPrefixesExists(resultRequest) {
    console.log("checkPrefixesExists");
    if (resultRequest.responseCode == 200) {
      console.log("checkPrefixesExists: kod 200");
      if (resultRequest.result.length == 0) {
        
        this.noPrefixes = true;
        this.banerInfo = new BannerMessageInfo();

        this.banerInfo
          .setAll(
            Constants.prefixes.loading.noPrefixes,
            Constants.ALERT_STYLES.ALERT_WARNING
          );
      }
    }
  }

  private setupModalData(index) {
    console.log("setupModalData");
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  async deletePrfixRequest() {
    console.log("deletePrfixRequest()");
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = await this.restService.delete(url);
    console.log("Sprawdzam kod błędu " + response.responseCode);
    this.setProperMessageBanerContent(response, Constants.prefixes.delete.failure, true);
    if (response.responseCode == 200) {
      this.loadAllPrefixes(); 
    }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest, errorString: string, showSuccess : boolean) {
    console.log("admin-prefix: setProperMessage");
    let banerInfo = new BannerMessageInfo();
    if (requestResult.responseCode == 200) {
      if (showSuccess) {
        console.log("kod 200");
        banerInfo = new BannerMessageInfo();
        banerInfo
          .setAll(
            Constants.REQUEST_SUCCESS_MESSAGE,
            Constants.ALERT_STYLES.ALERT_SUCCESS
          );

          this.banerInfo = banerInfo;
      }
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      console.log("Błąd 400");
      banerInfo = new BannerMessageInfo();

      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
    else if (requestResult.responseCode >= 500) {
      console.log("setProperMessageBannerContent: ustawiam bannerInfo na błąd dla 500");
      console.log("No prefixes: " + this.noPrefixes);
      console.log(this.prefixes);
      banerInfo = new BannerMessageInfo();
      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_500,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
  }

  showAddSetMessageResult(banerInfo) {
    console.log("Rezultat zbioru: ");
    console.log(banerInfo);
    
    this.banerInfo = banerInfo;
  }

  editSectionNew(i) {
    if (this.editingPrefixIndex < 0) {
      this.editingPrefixIndex = i;
    }
    else if (this.editingPrefixIndex == i) {
      this.editingPrefixIndex = -1;
    }
    else {
      this.editingPrefixIndex = i;
    }
  }

  showOperationSection(i) {
    let display = $("#operations-section-" + i).css('display');
  
    if (display == "none") {
      $("#btn-op-section-" + i).css("transform", "rotate(90deg)");
      $("#operations-section-" + i).removeClass("d-none");
    }
    else {
      $("#btn-op-section-" + i).css("transform", "rotate(0deg)");
      $("#operations-section-" + i).addClass("d-none");
      this.isHistoryPrefixViewActive[i] = false;
      if (this.editingPrefixIndex == i) {
        this.editingPrefixIndex = -1;
      }
      
    }
  }

  setUpHistoryViewData() {
    for (let i = 0; i < this.prefixes.length; i++) {
      this.isHistoryPrefixViewActive.push(false);                               
    }
  }

  showPrefixHistory(index) {
    if  (this.isHistoryPrefixViewActive[index] === true) {
       this.isHistoryPrefixViewActive[index] = false;
    } 
    else {
      this.isHistoryPrefixViewActive[index] = true;
      this.loadHistory(index);
    }
  }

  async loadHistory(index) {

    this.prefixes[index].prefixHistory = new PrefixHistory(); 
    this.prefixes[index].prefixHistory.registries = [];
    let requestResult = await this.restService.get<PrefixRegistry>(URLS.prefixes.registry.getAll  + "/" + this.prefixes[index].id);

    if (requestResult.responseCode == 200) {
      this.prefixes[index].prefixHistory.registries = requestResult.result;
      console.log(this.prefixes[index].prefixHistory);
    } 
    else {
      this.prefixes[index].prefixHistory.loadErrorMsg = 
        this.bannerService.getResponseMessage(requestResult, new PerfixHistoryLoadMsg());  
    }
  }

}
