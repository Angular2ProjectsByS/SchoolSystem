import { Injectable, OnInit, OnDestroy, NgModule } from '@angular/core';
import { ViewService } from '@app/component/admin/user/admin-user-add/service/view-service';
import { UserWithRole } from '@app/component/admin/user/admin-user-add/model/user-with-role';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Constants } from '@app/constants/constants';
import { Role } from '@app/model/role';
import { User } from '@app/component/admin/user/model/user';
declare var $: any;

@Injectable()
export abstract class AddEditUserBaseComponent implements OnInit {

    operationName = 'Dodaj';
    viewService: ViewService;
    user: User;
    roles: Role[];

    constructor(protected restService: RestService, viewService: ViewService) {
        this.viewService = viewService;
        this.user = new User();
    }

    async attachRolesToView() {
        const url = Constants.SERVER_PROXY + '/roles/get/all';
        const result = await this.restService.get<Role[]>(url);
        this.roles = result.result;
        console.log(this.roles);
    }

    async performUserOperation(url) {
        if (this.viewService.checkFormCorrection()) {
          const result = await this.actUserToDb(this.user, url);
          console.log('admin-user-add-component');
          console.log(result);
          this.viewService.showOperationResultMsg(result);
        } else {
          this.viewService.showValidationMsgs(this.user);
        }
        document.getElementById('page-title').scrollIntoView();
      }

      async actUserToDb(user: User, url) {
        const result = await this.restService.add<UserWithRole>(url, user);

        return result;
      }

    ngOnInit(): void {
        this.attachRolesToView();
    }

}
