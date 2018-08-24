import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { BaseDetail } from '@app/model/school-classes/details/base-detail';
import { ModalData } from '@app/model/view/ModalData';
import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';
import { ResultRequest } from '@app/model/request/result-request';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
import { BaseDetailHistory } from '@app/model/school-classes/details/base-datail-history';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { DetailHistoryLoadMsg } from '@app/messages/prefix-history-load-msg';
import { BaseDetailRegistry } from "@app/model/school-classes/details/base-detail-registry";
import { PaginParam } from '@app/model/view/pagin-param';
import { BaseDetailWrapperModel } from '@app/component/base-detail-wrapper/model/base-detail-wrapper-model';
declare var $ : any;

@Component({
  selector: 'app-base-detail-main',
  templateUrl: './base-detail-main.component.html',
  styleUrls: ['./base-detail-main.component.css']
})
export class BaseDetailMainComponent implements OnInit {

  @Input() msgUrlWrapper : BaseDetailWrapperModel;

  banerInfo: BannerMessageInfo;
  entities : BaseDetail[] = [];
  modalData : ModalData;
  detailToDeletePosition : number;
  showAddForm : boolean = false;
  private editingDetailIndex : number = -1;
  @ViewChild("twoButtonsModal") twoButtonsModal: TwoButtonsModalComponent;
  isHistoryDetailViewActive : boolean[] = [];
  loadHistoryErrorMsg: string;

  isDetailFromFindResult: boolean = false;
  foundDetails : BaseDetail[];

  constructor(private restService : RestService, private bannerService : MessageBannerService) {
    
  }

  ngOnInit() {
    this.initModalData();
    this.loadDetails(new PaginParam(10, 0));
  }

  private initModalData():void {
    this.modalData = new ModalData();
    this.modalData.title = "";
    this.modalData.body = "";
    this.modalData.url = "";
  }

  private async loadDetails(paginParam : PaginParam) {
    console.log("ładuje elementy");
    let url = this.msgUrlWrapper.MainModel.GetOneUrl + "?" + "limit=" + paginParam.limit + "&offset=" + paginParam.offset;
    console.log("url do wysłania: " + url);
    console.log("limit: " + paginParam.limit + ", offset: " + paginParam.offset);
    

    if (this.isDetailFromFindResult) {
      this.entities = this.foundDetails.slice(paginParam.offset, paginParam.offset + paginParam.limit);
    }
    else {

      let resultRequestSet = await this.restService.get<BaseDetail>(url);
      
      if (resultRequestSet.responseCode == 200) {
        this.entities = resultRequestSet.result;
      }

      this.checkResponseCode(resultRequestSet);
      this.checkDetailsExists(resultRequestSet);
    }  
  }

  showDeleteModal(index) {
    this.setupModalData(index);
    this.detailToDeletePosition = index;
    this.twoButtonsModal.showModal();
  }

  private checkResponseCode(requestResult : ResultRequest) {
      if (requestResult.responseCode >= 400) {
        this.setProperMessageBanerContent(requestResult, this.msgUrlWrapper.MainModel.LoadingFailureMsg, false);
      }
  }

  private checkDetailsExists(resultRequest) {
    if (resultRequest.responseCode == 200) {
      if (resultRequest.result.length == 0) {
        
        this.banerInfo = new BannerMessageInfo();

        this.banerInfo
          .setAll(
            this.msgUrlWrapper.MainModel.NoDetailsMsg,
            Constants.ALERT_STYLES.ALERT_WARNING
          );
      }
    }
  }

  private setupModalData(index) {
    
    this.modalData.body = this.msgUrlWrapper.MainModel.DeleteMessageBody + "\"" 
      + this.entities[index].name
      + "\"? ";

      
    this.modalData.title = this.msgUrlWrapper.MainModel.DeleteTitleModal + "\"" + this.entities[index].name + "\""; 
  }

  async deleteDetailRequest() {
    this.msgUrlWrapper.MainModel.DeleteOneUrl;
    let url = this.msgUrlWrapper.MainModel.DeleteOneUrl + "/" + this.entities[this.detailToDeletePosition].id;
    let response = await this.restService.delete(url);
    
    this.setProperMessageBanerContent(response, this.msgUrlWrapper.MainModel.DeleteFailureMsg, true);
    this.banerInfo = this.bannerService.setProperMessageBanerContent(response, this.msgUrlWrapper.MainModel.DeleteFailureMsg, true);
    if (response.responseCode == 200) {
      this.entities.splice(this.detailToDeletePosition, 1);
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
    if (this.editingDetailIndex < 0) {
      this.editingDetailIndex = i;
    }
    else if (this.editingDetailIndex == i) {
      this.editingDetailIndex = -1;
    }
    else {
      this.editingDetailIndex = i;
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
      this.isHistoryDetailViewActive[i] = false;
      if (this.editingDetailIndex == i) {
        this.editingDetailIndex = -1;
      }
      
    }
  }

  showDetailHistory(index) {
    if  (this.isHistoryDetailViewActive[index] === true) {
       this.isHistoryDetailViewActive[index] = false;
    } 
    else {
      this.isHistoryDetailViewActive[index] = true;
      this.loadHistory(index);
    }
  }

  async loadHistory(index) {

    this.entities[index].detailHistory = new BaseDetailHistory(); 
    this.entities[index].detailHistory.registries = [];
    
    let requestResult = await this.restService.get<BaseDetailRegistry>(this.msgUrlWrapper.MainModel.RegistryGetAll  + "/" + this.entities[index].id);

    if (requestResult.responseCode == 200) {
      this.entities[index].detailHistory.registries = requestResult.result;
    } 
    else {
      this.entities[index].detailHistory.loadErrorMsg = 
        this.bannerService.getResponseMessage(requestResult, new DetailHistoryLoadMsg());  
    }
  }

  addRegisteredDetails(details) {

    if (details instanceof Array) {
      for (let detail of details) {
        this.entities.push(detail);
      }
    }
    else {
      this.entities.push(details);
    }

  }

  async findByKeyWords(keyWords) {
    console.log("findByKeyWords");
    console.log(keyWords);

    let resultRequestSet = await this.restService.post<BaseDetail>(this.msgUrlWrapper.MainModel.FindUrl, keyWords);
  
    if (resultRequestSet.responseCode == 200) {
      this.foundDetails = resultRequestSet.result;
      this.isDetailFromFindResult = true;
      this.entities = this.foundDetails.slice(0, 10);
    }

    this.checkResponseCode(resultRequestSet);
    this.checkDetailsExists(resultRequestSet);
  }

}
