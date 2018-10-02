import { Constants } from './../../../../../constants/constants';
import { BaseDetail } from '@app/model/school-classes/details/base-detail';

import { RestService } from '@app/service/global/request/rest-service.service';
import { ViewService } from '@app/component/admin/school-class/main/base/ViewService';
import { Injectable, OnInit } from '@angular/core';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';
import { User } from '@app/component/admin/user/model/user';
import { MessageBannerService } from '@app/service/global/request/message-banner.service';
import { InfoToChoose } from '@app/component/admin/school-class/main/base/model/InfoToChoose';
import { ChosenInfo } from '@app/component/admin/school-class/main/base/model/ChosenInfo';
import { UserSearchResult } from '@app/component/admin/school-class/main/base/model/UserSearchResult';

@Injectable()
export class AddEditBaseComponent implements OnInit {
   
    infoToChoose : InfoToChoose;
    // prefixes : BaseDetail[] = [];
    // specializations : BaseDetail[] = [];
    // types : BaseDetail[] = [];

    chosenInfo : ChosenInfo = new ChosenInfo();
    // chosenSpecializations : BaseDetail[] = [];
    // chosenSpecialization : BaseDetail = new BaseDetail();
    schoolClass : SchoolClass = new SchoolClass();
    operationName : string;
    
    searchResult : UserSearchResult = new UserSearchResult();
    // tutorList : User[];
    // foundStudents : User[];
    

    constructor(protected restService : RestService, protected viewService : ViewService, protected banerService : MessageBannerService) {
        this.infoToChoose  = new InfoToChoose(this.restService)
    }

    ngOnInit() {
        this.infoToChoose.loadInfoToChose();
    }

    setFormTutor(formTutor : User) {
        this.schoolClass.tutor = formTutor;
    }

    addUserToStudents(user : User) {
        this.schoolClass.students.push(user);
    }

    addSpecializationToGroupOfChosen() {
        console.log(this.chosenInfo.specialization);
        this.schoolClass.classSpecializationList.push(this.chosenInfo.specialization);
    }

    getFoundTutors(tutors : User[]) {
        console.log("Mam nuczycieli w komponencie głównym");
        this.searchResult.tutorList = tutors;
    }

    getFoundStudents(students : User[]) {
        this.searchResult.students = students;
    }

    async performUserActionToDatabase(url : string) {
        let response = this.restService.post(url, this.schoolClass);
        let bannerInfo = this.banerService.checkRespone(response, this.viewService.addSchoolClassResultMsg);
        console.log(response);
    }

    acceptForm() {
        
    }

}