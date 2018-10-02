import { RestService } from './../../../../../../service/global/request/rest-service.service';
import { BaseDetail } from "@app/model/school-classes/details/base-detail";
import { Injectable } from "@angular/core";
import { Constants } from '@app/constants/constants';

@Injectable()
export class InfoToChoose {
    prefixes : BaseDetail[] = [];
    specializations : BaseDetail[] = [];
    types : BaseDetail[] = [];

    constructor(private restService : RestService) {
        
    }

    loadInfoToChose() {
        this.loadPrefixes();
        this.loadSpecializations();
        this.loadTypes();
    }

    async loadPrefixes() {
        let url = Constants.SERVER_PROXY + "/class-prefixex/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.prefixes = response.result;
        console.log("Prefiksy załadowane");
    }

    async loadSpecializations() {
        let url = Constants.SERVER_PROXY + "/class-specialization/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.specializations = response.result;
        console.log("Specjalizacje załadowane");
    }

    async loadTypes() {
        let url = Constants.SERVER_PROXY + "/class-type/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.types = response.result;
        console.log("Typy załadowane");
    }
}