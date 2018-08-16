import { Injectable } from '@angular/core';
import { Constants } from '@app/constants/constants';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
import { ResponseMessages } from '@app/model/view/response-messages'

@Injectable({
  providedIn: 'root'
})
export class MessageBannerService {

  constructor() { }

  checkRespone(requestResult, messages : ResponseMessages)  {

    let banerInfo = new BannerMessageInfo();
    banerInfo.alertStyle = Constants.ALERT_STYLES.ALERT_DANGER;

    let message = "";

    if (requestResult.responseCode == 200) {
      message = messages.code200;
      banerInfo.alertStyle = Constants.ALERT_STYLES.ALERT_SUCCESS;
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      message = messages.code400 + " " + Constants.MESSAGE_ERROR_400;
      if (requestResult.responseCode == 409) {
        message += " " + requestResult.message;
      }
    }
    else if (requestResult.responseCode >= 500) {
      message = messages.code500 + " " + Constants.MESSAGE_ERROR_500;
    }

    banerInfo.message = message;

    return banerInfo;
  }

  getResponseMessage(requestResult, messages : ResponseMessages) : string {

    let message : string = "";
    
    if (requestResult.responseCode == 200) {
      message = messages.code200;
    }
    else if (requestResult.responseCode >= 400 && requestResult.responseCode < 500) {
      message = messages.code400 + " " + Constants.MESSAGE_ERROR_400;
      if (requestResult.responseCode == 409) {
        message += " " + requestResult.result;  
      }
    }
    else if (requestResult.responseCode >= 500) {
      message = messages.code500 + " " + Constants.MESSAGE_ERROR_500;
    }

    return message;
  }
}
