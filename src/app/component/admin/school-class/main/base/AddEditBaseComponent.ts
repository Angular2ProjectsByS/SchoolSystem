import { Constants } from './../../../../../constants/constants';
import { BaseDetail } from '@app/model/school-classes/details/base-detail';

import { RestService } from '@app/service/global/request/rest-service.service';
import { ViewService } from '@app/component/admin/school-class/main/base/ViewService';
import { Injectable, OnInit } from '@angular/core';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';
import { User } from '@app/component/admin/user/model/user';

@Injectable()
export class AddEditBaseComponent implements OnInit {
   
    prefixes : BaseDetail[] = [];
    specializations : BaseDetail[] = [];
    types : BaseDetail[] = [];
    chosenSpecializations : BaseDetail[] = [];
    chosenSpecialization : BaseDetail = new BaseDetail();
    schoolClass : SchoolClass = new SchoolClass();
    operationName : string;
    
    tutorList : User[];
    foundStudents : User[];
    

    constructor(protected restService : RestService, protected viewService : ViewService) {
        
    }

    async ngOnInit() {
        this.loadPrefixes();
        this.loadSpecializations();
        this.loadTypes();
    }

    async loadPrefixes() {
        let url = Constants.SERVER_PROXY + "/class-prefixex/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.prefixes = response.result;
    }

    async loadSpecializations() {
        let url = Constants.SERVER_PROXY + "/class-specialization/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.specializations = response.result;
    }

    async loadTypes() {
        let url = Constants.SERVER_PROXY + "/class-type/get/all";
        let response =  await this.restService.get<BaseDetail>(url);
        this.types = response.result;
    }

    setFormTutor(formTutor : User) {
        this.schoolClass.tutor = formTutor;
    }

    addUserToStudents(user : User) {
        this.schoolClass.students.push(user);
    }

    addSpecializationToGroupOfChosen() {
        console.log(this.chosenSpecialization);
        this.schoolClass.classSpecializationList.push(this.chosenSpecialization);
    }

    getFoundTutors(tutors : User[]) {
        this.tutorList = tutors;
    }

    getFoundStudents(students : User[]) {
        this.foundStudents = students;
    }

    acceptForm() {
        console.log(this.schoolClass);
    }

}