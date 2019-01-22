import { Component, OnInit } from '@angular/core';
import {RestService} from '@app/service/global/request/rest-service.service';
import {Constants} from '@app/constants/constants';
import {User} from '@app/component/admin/user/model/user';
import {UserParams} from '@app/component/admin/user/user-search/UserParams';
declare var $: any;

@Component({
  selector: 'app-occupational-group-add',
  templateUrl: './occupational-group-add.component.html',
  styleUrls: ['./occupational-group-add.component.css']
})
export class OccupationalGroupAddComponent implements OnInit {

  subjects: any;
  occupationalGroup: any = {};
  peselMask = [ /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  teacherParam: UserParams = new UserParams();
  foundTeachers: Array<object> = Array<Object>();
  foundClasses = Array<any>();
  type = 'Typ klasy';
  prefix = 'Prefiks';
  prefixes: any;
  types: any;

  constructor(private restService: RestService) {}

  async ngOnInit() {
    $('no-teacher-alert').hide();
    this.subjects = await this.getDetails(Constants.SERVER_PROXY + '/school-subject/get/all');
    // @ts-ignore
    this.occupationalGroup.schoolSubject = this.subjects[0];
    this.prefixes = await this.getDetails(Constants.SERVER_PROXY + '/class-prefixex/get/all');
    this.types = await this.getDetails(Constants.SERVER_PROXY + '/class-type/get/all');
  }

  async getDetails(url) {
    const res = await this.restService.get(url);
    console.log(res);
    console.log(res.result[0]);
    return res.result;
  }

  async findTeachers() {
    if (this.checkTeacherParams()) {
      const url = Constants.SERVER_PROXY + '/users/find?role=TEACHER';
      const response = await this.restService.post<User[]>(url, this.teacherParam);
      this.foundTeachers = response.result;
      if (this.foundTeachers.length === 0) {
        // console.log('p')
        $('#no-teacher-alert').show();
      } else {
        $('#no-teacher-alert').hide();
      }
      console.log(response.result);
    }
  }

  async findSchoolClass() {
    if (this.checkSearchClassParams()) {
      // @ts-ignore
      const url = Constants.SERVER_PROXY + '/schoolclass/get?prefix=' + this.prefix.name + '&type=' + this.type.name;
      console.log('url: ' +  url);
      const response = await this.restService.get<any>(url);
      this.foundClasses = response.result;
      if (this.foundClasses.length === 0) {
        // console.log('p')
        $('#no-class-alert').show();
      } else {
        $('#no-class-alert').hide();
      }
      console.log(response.result);
    }
  }

  checkTeacherParams() {
    if (this.teacherParam.firstName !== '' && this.teacherParam.lastName !== '' || this.teacherParam.pesel !== '') {
      return true;
    } else {
      alert('Proszę wypełnić pola');
      return false;
    }
  }

  checkSearchClassParams() {
    if (this.prefix !== '' || this.type !== '') {
      return true;
    } else {
      alert('Proszę wypełnić pola.');
      return false;
    }
  }

  chooseTeacher(i) {
    // @ts-ignore
    this.occupationalGroup.teacher = this.foundTeachers[i];
  }

  chooseSchoolClass(i) {
    // @ts-ignore
    this.occupationalGroup.schoolClass = this.foundClasses[i];
  }

  async addOccupationalGroup() {
    const url = Constants.SERVER_PROXY + '/occupational-group/add';
    console.log('url: ' + url);
    console.log(this.occupationalGroup);
    const response = await this.restService.post(url, this.occupationalGroup);
    if (response.responseCode === 200) {
      alert('Dodanie grupy zajęciowej zakończone powodzeniem');
    } else {
      alert('Niepowodzenie.');
    }
    // console.log(response);
  }
}
