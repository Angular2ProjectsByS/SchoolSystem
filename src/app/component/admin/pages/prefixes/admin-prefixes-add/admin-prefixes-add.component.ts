import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Prefix } from '@app/model/school-classes/details/prefix';
import { URLS } from '@app/constants/urls';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
import { ResponseMessages } from '@app/model/view/response-messages';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { ResultRequestSet } from  '@app/model/request/result-request-set';

@Component({
  selector: 'app-admin-prefixes-add',
  templateUrl: './admin-prefixes-add.component.html',
  styleUrls: ['./admin-prefixes-add.component.css']
})
export class AdminPrefixesAddComponent implements OnInit {

  private prefixesToSend : Array<string> = [];
  actualPrefixName : string;
  validationMessage : string;
  responseMessages : ResponseMessages;
  @Output() showMessageResultTrigger: EventEmitter<BannerMessageInfo> = new EventEmitter<BannerMessageInfo>();
  @Output() addPrefixesToLocalTrigger : EventEmitter<Prefix[]> = new EventEmitter<Prefix[]>();

  constructor(private restService: RestService, private responseService: MessageBannerService) { 
    this.setResponseMessages();
  }

  ngOnInit() {
  }

  setResponseMessages() {
    this.responseMessages = new ResponseMessages();
    this.responseMessages.code200 = Constants.prefixes.add.success;
    this.responseMessages.code400 = Constants.prefixes.add.failure + " " + Constants.MESSAGE_ERROR_400;
    this.responseMessages.code500 = Constants.prefixes.add.failure + " " + Constants.MESSAGE_ERROR_500;
  }

  addPrefixToSet() {
    let prefixName = this.actualPrefixName.trim();

    if (this.checkPrefixName(prefixName)) {
      this.validatePrefixName(prefixName);
      this.prefixesToSend.push(prefixName);
      this.actualPrefixName = "";
      
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

    if (this.prefixesToSend.indexOf(name) != -1) {
      isValidName = false;
      this.validationMessage = Constants.prefixes.validation.prefixExists;
    }
    else if (!this.validatePrefixName(name)){
      isValidName = false;
      this.validationMessage = Constants.prefixes.validation.prefixExists;
    }

    return isValidName;
  }

  private removeLastSpaceFromPrefix() {
    this.actualPrefixName = this.actualPrefixName.substring(0, this.actualPrefixName.length - 1);
  }

  validatePrefixName(name) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

  removePrefixFromSet(i) {
    this.prefixesToSend.splice(i, 1);
  }

  async sendPrefixes() {
    let requestResult = null;

    if (this.prefixesToSend.length > 0) {
      requestResult = await this.sendPrefixCollection();
    }
    else {
      requestResult = await this.sendOnePrefix();
    }

    if (requestResult != null) {
      let banerInfo = this.responseService.checkRespone(requestResult, this.responseMessages);
      this.showMessageResultTrigger.emit(banerInfo);
      this.addPrefixesToLocal(requestResult);
    }
  }

  async sendPrefixCollection(): Promise<BannerMessageInfo> {
    let prefixes = this.wrapPrefixesNamesToClasses();
    let requestResult = await this.restService.add(URLS.prefixes.addSet, prefixes);
    console.log("requestResult: ");
    console.log(requestResult);
    let banerInfo = this.responseService.checkRespone(requestResult, this.responseMessages);

    if (requestResult.responseCode == 200) {
      this.prefixesToSend = [];
    }

    return banerInfo;
  }

  async sendOnePrefix(): Promise<ResultRequestSet<Prefix>> {
    let requestResult= null;
    if (this.validatePrefixName(this.actualPrefixName)) {
      let prefix = new Prefix();
      prefix.name = this.actualPrefixName;

      requestResult = await this.restService.add(URLS.prefixes.addOne, prefix);
      this.clearActualPrefixName(requestResult.responseCode);
      
    }
    else {
      this.validationMessage = "Nazwa prefiksu posiada nieprawidłowy format.";
    }

    return requestResult;

  }

  clearActualPrefixName(code) {
    if (code == 200) {
      this.actualPrefixName = "";
    }
  }

  wrapPrefixesNamesToClasses(): Array<Prefix>  {
    let prefixes : Array<Prefix> = [];

    for (let prefixName of this.prefixesToSend) {
      let prefix = new Prefix();
      prefix.name = prefixName;
      prefixes.push(prefix);
    }

    return prefixes;
  }

  addPrefixesToLocal(resultRequest) {
    if (resultRequest.responseCode == 200) {
      this.addPrefixesToLocalTrigger.emit(resultRequest.result);  
    }
  } 

}
