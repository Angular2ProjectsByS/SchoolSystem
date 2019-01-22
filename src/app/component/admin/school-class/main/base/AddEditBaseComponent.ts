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

    infoToChoose: InfoToChoose;

    chosenInfo: ChosenInfo = new ChosenInfo();

    schoolClass: SchoolClass = new SchoolClass();
    operationName: string;

    searchResult: UserSearchResult = new UserSearchResult();

    constructor(protected restService: RestService, protected viewService: ViewService, protected banerService: MessageBannerService) {
        this.infoToChoose  = new InfoToChoose(this.restService)
    }

    ngOnInit() {
        this.infoToChoose.loadInfoToChose();
    }

    setFormTutor(formTutor: User) {
        this.schoolClass.tutor = formTutor;
    }

    addUserToStudents(user: User) {
        this.schoolClass.students.push(user);
    }

    addSpecializationToGroupOfChosen() {
        console.log(this.chosenInfo.specialization);
        this.schoolClass.classSpecializationList.push(this.chosenInfo.specialization);
    }

    getFoundTutors(tutors: User[]) {
        console.log('Mam nuczycieli w komponencie głównym');
        if (tutors.length !== 0) {
          this.searchResult.tutorList = tutors;
        } else {
          // alert('Brak nauczycieli o podanych parametrach');
        }
    }

    getFoundStudents(students: User[]) {
        this.searchResult.students = students;
    }

    async performUserActionToDatabase(url: string) {
        this.schoolClass.id = 0;
        console.log('school class: ');
        console.log(this.schoolClass);
        const response = await this.restService.post(url, this.schoolClass);
        console.log('send add request');
        const bannerInfo = this.banerService.checkRespone(response, this.viewService.addSchoolClassResultMsg);
        console.log('response');
        console.log(response);
        // if (response.status === 200) {
        //   alert('Dodanie nowej klasy zakończone powodzeniem');
        // }
    }

    acceptForm() {

    }

}
