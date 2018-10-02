import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { Constants } from './../../../../../constants/constants';

import { RestService } from '@app/service/global/request/rest-service.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AddEditBaseComponent } from '@app/component/admin/school-class/main/base/AddEditBaseComponent';
import { ViewService } from '@app/component/admin/school-class/main/base/ViewService';

@Component({
  selector: 'app-school-class-add',
  templateUrl: '../templates/add-edit-school-class.html',
  styleUrls: ['../templates/add-edit-school-class.css'],
  providers: [RestService, ViewService, MessageBannerService]
})
export class SchoolClassAddComponent extends AddEditBaseComponent {


  constructor(protected restService : RestService, protected viewService : ViewService, protected bannerService : MessageBannerService) { 
    super(restService, viewService, bannerService);
    this.operationName = "Dodaj";
  }

  async ngOnInit() {
    super.ngOnInit();
  }

  acceptForm() {
    let url = Constants.SERVER_PROXY + "/schoolclass/add";
    this.performUserActionToDatabase(url);
  }


}
