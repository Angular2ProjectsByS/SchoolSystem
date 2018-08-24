import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BaseDetail } from "@app/model/school-classes/details/base-detail";
import { Constants } from '@app/constants/constants';
import { RestService } from '@app/service/global/request/rest-service.service';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { URLS } from '@app/constants/urls';
import { ResponseMessages } from '@app/model/view/response-messages';
import { DetailUpdateMessage } from '@app/messages/prefix-update-message';
import { BaseDetailEditModel } from '@app/component/base-detail-wrapper/model/base-detail-edit-model';

@Component({
  selector: 'app-base-detail-edit',
  templateUrl: './base-detail-edit.component.html',
  styleUrls: ['./base-detail-edit.component.css']
})
export class BaseDetailEditComponent implements OnInit {

  constructor(private restService : RestService, private responseService : MessageBannerService) {}

  @Input() msgUrlWrapper : BaseDetailEditModel;

  actionResultMsg: string = null;
  @Input() detail: BaseDetail;
  newDetailVersion : BaseDetail;

  updateHttpMessages : ResponseMessages;

  ngOnInit() {
    this.newDetailVersion = { ...this.detail };
    console.log("ngOnInit");
    console.log()
    console.log("newDetailVersion");
    console.log(this.newDetailVersion);
  }

  async updateDetail() {
    if (this.validateDetailName(this.newDetailVersion.name)) {
      console.log("newDetailVersion");
      console.log(this.newDetailVersion);
      
      let requestResult = await this.restService.update(this.msgUrlWrapper.UpdateUrl, this.newDetailVersion);
      this.actionResultMsg = this.responseService.getResponseMessage(requestResult,
         new DetailUpdateMessage(this.msgUrlWrapper.UpdateSuccessMsg, this.msgUrlWrapper.UpdateFailureMsg));
      this.updateLocalDetailRepresentation(requestResult.responseCode);

      if (requestResult.responseCode != 200) {
        console.log(requestResult);
        this.actionResultMsg = this.msgUrlWrapper.UpdateFailureMsg + " " + requestResult.errorMessage + ".";
      } 
      else {
        this.actionResultMsg = this.msgUrlWrapper.UpdateSuccessMsg;
      }
      
    }
    else {
      this.actionResultMsg = this.msgUrlWrapper.UpdateFailureMsg;
      console.log("Prefix nie przeszedł walidacji");
    }
  }

  updateLocalDetailRepresentation(code: number) {
    if (code == 200) {
      this.detail.name = this.newDetailVersion.name;
    }
  }

  validateDetailName(name) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

  ngOnDestroy() {
    console.log("Zniszczono element: admin-prefix-edit.component");
  }

}
