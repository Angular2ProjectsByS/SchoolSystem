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
import { PaginParam } from '@app/model/view/pagin-param';

declare var $ : any;

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent implements OnInit {

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
    this.loadPrefixes(new PaginParam(10, 0));
  }

  ngOnInit() {
  }

  private initModalData():void {
    this.modalData = new ModalData();
    this.modalData.title = "";
    this.modalData.body = "";
    this.modalData.url = "";
  }



  private async loadPrefixes(paginParam : PaginParam) {
    let url = URLS.prefixes.getOne + "?" + "limit=" + paginParam.limit + "&offset=" + paginParam.offset;
    let resultRequestSet = await this.restService.get<Prefix>(url);
  
    if (resultRequestSet.responseCode == 200) {
      this.prefixes = resultRequestSet.result;
      this.setUpHistoryViewData();
    }

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
        this.setProperMessageBanerContent(requestResult, Constants.prefixes.loading.failure, false);
      }
  }

  private checkPrefixesExists(resultRequest) {
    if (resultRequest.responseCode == 200) {
      if (resultRequest.result.length == 0) {
        
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
    this.modalData.body = "Czy napewno chcesz usunąć prefix \"" 
      + this.prefixes[index].name
      + "\"? ";

    this.modalData.title = "Usuwanie prefiksu \"" + this.prefixes[index].name + "\""; 
  }

  async deletePrfixRequest() {
    let url = URLS.prefixes.deleteOne + "/" + this.prefixes[this.prefixToDeletePosition].id;
    let response = await this.restService.delete(url);
    this.setProperMessageBanerContent(response, Constants.prefixes.delete.failure, true);
    if (response.responseCode == 200) {
      this.prefixes.splice(this.prefixToDeletePosition, 1);
    }
  }

  private setProperMessageBanerContent(requestResult : ResultRequest, errorString: string, showSuccess : boolean) {
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

      banerInfo = new BannerMessageInfo();

      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_400,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
    else if (requestResult.responseCode >= 500) {
      banerInfo = new BannerMessageInfo();
      banerInfo
        .setAll(
          errorString + Constants.MESSAGE_ERROR_500,
          Constants.ALERT_STYLES.ALERT_DANGER);

      this.banerInfo = banerInfo;
    }
  }

  showAddSetMessageResult(banerInfo) {    
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
    } 
    else {
      this.prefixes[index].prefixHistory.loadErrorMsg = 
        this.bannerService.getResponseMessage(requestResult, new PerfixHistoryLoadMsg());  
    }
  }

  addRegisteredPrefixes(prefixes) {

    if (prefixes instanceof Array) {
      for (let prefix of prefixes) {
        this.prefixes.push(prefix);
      }
    }
    else {
      this.prefixes.push(prefixes);
    }

  }

}
