import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Prefix } from "@app/model/school-classes/details/prefix";
import { Constants } from '@app/constants/constants';
import { RestService } from '@app/service/global/request/rest-service.service';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';

@Component({
  selector: 'app-admin-prefix-edit',
  templateUrl: './admin-prefix-edit.component.html',
  styleUrls: ['./admin-prefix-edit.component.css']
})
export class AdminPrefixEditComponent implements OnInit {

  constructor(private restService : RestService, private responseService : MessageBannerService) { }

  validationMessage: string = null;
  @Input() prefix: Prefix;
  @Output() requestSendPrefixToUpdate: EventEmitter<Prefix> = new EventEmitter<Prefix>();

  ngOnInit() {
  }

  askToUpdatePrefix() {
    if (this.validatePrefixName(this.prefix.name)) {
      this.requestSendPrefixToUpdate.emit(this.prefix);
    }
    else {
      this.validationMessage = Constants.SCH_PREFIX_VALIDATION_ERROR_MESSAGE;
    }
  }

  validatePrefixName(name) {
    var pattern = /^[a-z]+$/g;
    return pattern.test(name);
  }

}
