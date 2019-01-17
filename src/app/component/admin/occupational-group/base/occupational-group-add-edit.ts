import { ElementsToChoose } from './model/elements-to-choose';
import { Constants } from '@app/constants/constants';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';
import { OccupationalGroup } from './../model/occupational-group';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class OccupationalGroupAddEdit implements OnInit {

    occupationalGroup : OccupationalGroup;
    elementsToChoose : ElementsToChoose = new ElementsToChoose();

    constructor(private restSerivce : RestService) {

    }

    async ngOnInit() {
        
    }

    async getAllSchoolSubject() : Promise<OccupationalGroup[]> {
        let url = Constants.SERVER_PROXY + "/occupational-group/get/all";
        let response = await this.restSerivce.get<OccupationalGroup[]>(url);
        return response.result;
    }

}
