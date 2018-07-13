import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '../../../../../service/global/request/rest-service.service';
import { Prefix } from '../../../../../model/school-classes/details/prefix';
import { URLS } from '../../../../../constants/urls';
import { Constants } from '../../../../../constants/constants';
import { BannerMessageInfo } from '../../../../../model/view/banner-message-info';


@Component({
  selector: 'app-admin-prefixes-add',
  templateUrl: './admin-prefixes-add.component.html',
  styleUrls: ['./admin-prefixes-add.component.css']
})
export class AdminPrefixesAddComponent implements OnInit {

  private prefixesToSend : Array<string> = ['a', 'b'];
  actualPrefix : string;
  validationMessage : string;
  @Output() showMessageResultTrigger: EventEmitter<BannerMessageInfo> = new EventEmitter<BannerMessageInfo>();


  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  addPrefixToSet() {
    let prefixName = this.actualPrefix.trim();

    if (this.checkPrefixName(prefixName)) {
      this.validatePrefix(prefixName);
      this.prefixesToSend.push(prefixName);
      this.actualPrefix = "";
      
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
      this.validationMessage = "Prefiks znajduje się już w zbiorze.";
    }
    else if (!this.validatePrefix(name)){
      isValidName = false;
      this.validationMessage = "Nazwa prefiksu posiada nieprawidłowy format.";
    }

    return isValidName;
  }

  private removeLastSpaceFromPrefix() {
    this.actualPrefix = this.actualPrefix.substring(0, this.actualPrefix.length - 1);
  }


  validatePrefix(name) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

  removePrefixFromSet(i) {
    this.prefixesToSend.splice(i, 1);
  }

  async sendPrefixes() {
    console.log("Wysyłam zbiór prefiksów.");
    let prefixes = this.wrapPrefixesNamesToClasses();
    let requestResult = await this.restService.addSet(URLS.prefixes.addSet, prefixes);
    console.log("requestResult: ");
    console.log(requestResult);
    this.checkRequestResultErrors(requestResult);
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

  checkRequestResultErrors(requestResult) {
    console.log("Sprawdzam błędy");

    let banerInfo = new BannerMessageInfo();
    banerInfo.alertStyle = Constants.ALERT_STYLES.ALERT_DANGER;

    console.log(requestResult.responseCode);
    let message = "";

    if (requestResult.responseCode == 200) {
      message = Constants.SCH_PREFIXES_ADD_SET_SUCCESS_MESSAGE;
      banerInfo.alertStyle = Constants.ALERT_STYLES.ALERT_SUCCESS;
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      message = Constants.SCH_PREFIXES_ADD_SET_FAILURE_MESSAGE + " " + Constants.MESSAGE_ERROR_400;
      if (requestResult.responseCode == 409) {
        message += " " + requestResult.result[0];  
      }
    }
    else if (requestResult.responseCode >= 500) {
      console.log("Błąd 500");
      message = Constants.SCH_PREFIXES_ADD_SET_FAILURE_MESSAGE + " " + Constants.MESSAGE_ERROR_500;
    }

    banerInfo.message = message;

    this.showMessageResultTrigger.emit(banerInfo);
  }

}
