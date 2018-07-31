import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Prefix } from "@app/model/school-classes/details/prefix";
import { Constants } from '@app/constants/constants';
import { RestService } from '@app/service/global/request/rest-service.service';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { URLS } from '@app/constants/urls';
import { ResponseMessages } from '@app/model/view/response-messages';
import { PrefixUpdateMessage } from '@app/messages/prefix-update-message';

@Component({
  selector: 'app-admin-prefix-edit',
  templateUrl: './admin-prefix-edit.component.html',
  styleUrls: ['./admin-prefix-edit.component.css']
})
export class AdminPrefixEditComponent implements OnInit {

  constructor(private restService : RestService, private responseService : MessageBannerService) {}

  actionResultMsg: string = null;
  @Input() prefix: Prefix;
  newPrefixVersion : Prefix = this.prefix;
  @Output() requestSendPrefixToUpdate: EventEmitter<Prefix> = new EventEmitter<Prefix>();

  updateHttpMessages : ResponseMessages;

  ngOnInit() {
    this.newPrefixVersion = { ...this.prefix };
  }

  setUpdateHttpMessages() {
    this.updateHttpMessages 
  }

  async updatePrefix() {
    if (this.validatePrefixName(this.newPrefixVersion.name)) {
      console.log(this.newPrefixVersion);
      let requestResult = await this.restService.update(URLS.prefixes.update, this.newPrefixVersion);
      this.actionResultMsg = this.responseService.getResponseMessage(requestResult, new PrefixUpdateMessage());
      this.updateLocalPrefixRepresentation(requestResult.responseCode);
    }
    else {
      this.actionResultMsg = Constants.prefixes.validation.failure;
      console.log("Prefix nie przeszedł walidacji");
    }
  }

  updateLocalPrefixRepresentation(code: number) {
    if (code == 200) {
      this.prefix.name = this.newPrefixVersion.name;
    }
  }

  validatePrefixName(name) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

  ngOnDestroy() {
    console.log("Zniszczono element: admin-prefix-edit.component");
  }

}
