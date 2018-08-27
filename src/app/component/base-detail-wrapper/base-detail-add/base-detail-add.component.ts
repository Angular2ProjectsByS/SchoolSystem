import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { BaseDetail } from '@app/model/school-classes/details/base-detail';
import { URLS } from '@app/constants/urls';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
import { ResponseMessages } from '@app/model/view/response-messages';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { AddResultResponse } from '@app/model/request/add-result-response';
import { BaseDetailAddModel } from '@app/component/base-detail-wrapper/model/base-detail-add-model';

@Component({
  selector: 'app-base-detail-add',
  templateUrl: './base-detail-add.component.html',
  styleUrls: ['./base-detail-add.component.css']
})
export class BaseDetailAddComponent implements OnInit {

  @Input() 
  msgUrlWrapper : BaseDetailAddModel;

  private detailsToSend : Array<string> = [];
  actualDetailName : string;
  validationMessage : string;
  responseMessages : ResponseMessages;
  @Output() showMessageResultTrigger: EventEmitter<BannerMessageInfo> = new EventEmitter<BannerMessageInfo>();
  @Output() addDetailsToLocalTrigger : EventEmitter<BaseDetail[]> = new EventEmitter<BaseDetail[]>();

  constructor(private restService: RestService, private responseService: MessageBannerService) { 
    
  }

  ngOnInit() {
    this.setResponseMessages();
  }

  setResponseMessages() {
    this.responseMessages = new ResponseMessages();;
    this.responseMessages.code200 = this.msgUrlWrapper.AddSuccesMsg;
    this.responseMessages.code400 = this.msgUrlWrapper.AddFailureMsg + " " + Constants.MESSAGE_ERROR_400;
    this.responseMessages.code500 = this.msgUrlWrapper.AddFailureMsg + " " + Constants.MESSAGE_ERROR_500;
  }

  addDetailToSet() {
    let detailName = this.actualDetailName.trim();

    if (this.checkPrefixName(detailName)) {
      this.validateDetailName(detailName);
      this.detailsToSend.push(detailName);
      this.actualDetailName = "";
      
      if (this.validationMessage !== "") {
        this.validationMessage = null;
      }
    }
    else {
      this.removeLastSpaceFromPrefix();
    }
  }


  checkPrefixName(name) {
    let isValidName = true;

    if (this.detailsToSend.indexOf(name) != -1) {
      isValidName = false;
      
      this.validationMessage = this.msgUrlWrapper.DetailExistsMsg;
    }
    else if (!this.validateDetailName(name)){
      isValidName = false;
      this.validationMessage = this.msgUrlWrapper.DetailExistsMsg;
    }

    return isValidName;
  }

  private removeLastSpaceFromPrefix() {
    this.actualDetailName = this.actualDetailName.substring(0, this.actualDetailName.length - 1);
  }

  validateDetailName(name) {
    var pattern = /^[\s\p{L}]+$/u;
    // var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

  removeDetailFromSet(i) {
    this.detailsToSend.splice(i, 1);
  }

  async sendDetails() {
    let requestResult = null;

    if (this.detailsToSend.length > 0) {
      requestResult = await this.sendDetailCollection();
    }
    else {
      requestResult = await this.sendOneDetail();
    }

    console.log("sendDetails: ");
    console.log(requestResult);

    if (requestResult != null) {
      let banerInfo = this.responseService.checkRespone(requestResult, this.responseMessages);
      this.showMessageResultTrigger.emit(banerInfo);
      this.addDetailsToLocal(requestResult);
    }
  }

  async sendDetailCollection(): Promise<AddResultResponse<BaseDetail>> {

    let details = this.wrapPrefixesNamesToClasses();
    let requestResult = await this.restService.add<BaseDetail>(this.msgUrlWrapper.AddSetUrl, details);
    console.log("requestResult: ");
    console.log(requestResult);

    if (requestResult.responseCode == 200) {
      this.detailsToSend = [];
    }

    return requestResult;
  }

  async sendOneDetail(): Promise<AddResultResponse<BaseDetail>> {
    let requestResult= null;
    if (this.validateDetailName(this.actualDetailName)) {
      let detail = new BaseDetail();
      detail.name = this.actualDetailName;

      requestResult = await this.restService.add<BaseDetail>(this.msgUrlWrapper.AddOneUrl, detail);
      this.clearActualDetailName(requestResult.responseCode);
      
    }
    else {
      this.validationMessage = this.msgUrlWrapper.WrongNameFormatMsg;
    }

    return requestResult;

  }

  clearActualDetailName(code) {
    if (code == 200) {
      this.actualDetailName = "";
    }
  }

  wrapPrefixesNamesToClasses(): Array<BaseDetail>  {
    let details : Array<BaseDetail> = [];

    for (let detailName of this.detailsToSend) {
      let detail = new BaseDetail();
      detail.name = detailName;
      details.push(detail);
    }

    return details;
  }

  addDetailsToLocal(resultRequest) {
    console.log("addPrefixesToLocal.kod odpowiedzi");
    console.log(resultRequest.responseCode);
    if (resultRequest.responseCode < 500) {
      
      this.addDetailsToLocalTrigger.emit(resultRequest.addedElements);
      this.removeRegisteredDetailsFromToAdd(resultRequest.addedElements);
    }      
  } 
  
  removeRegisteredDetailsFromToAdd(details) {
    if (details instanceof Array) {
      let detailsNamesToRemove : number[] = [];
  
      for (let detail of details) {
        let position = 0;
        for (let detailToAdd of this.detailsToSend) {
          console.log(detail.name + " " + detailToAdd);
          if (detail.name == detailToAdd) {
            
            console.log("To jest sobie równe: " + detail.name + " " + position);
            break;
            
          }
          position++;
        }
        if (position == this.detailsToSend.length - 1) {
          detailsNamesToRemove.push(position);
        }
      } 
      
      for (let detailPos of detailsNamesToRemove) {
        this.removeDetailFromSet(detailPos);
      }
    }
  }

}
