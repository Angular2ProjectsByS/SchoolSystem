import { Constants } from './../../../../../constants/constants';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';
import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
declare var $ : any;

@Component({
  selector: 'app-school-class-list',
  templateUrl: './school-class-list.component.html',
  styleUrls: ['./school-class-list.component.css']
})
export class SchoolClassListComponent implements OnInit {

  schoolClasses : SchoolClass[] = [];

  constructor(private restService : RestService) { }

  ngOnInit() {
    this.getAllClass();
  }

  async getAllClass() {
    let url = Constants.SERVER_PROXY + "/schoolclass/get/all";
    let response = await this.restService.get<SchoolClass>(url);
    console.log(response.result);
    this.schoolClasses = response.result;
    console.log(this.schoolClasses);
  }

  showOperationSection(i) {
    let display = $("#operations-section-" + i).css('display');
  
    if (display == "none") {
      $("#btn-op-section-" + i).css("transform", "rotate(90deg)");
      $("#operations-section-" + i).removeClass("d-none");
    }
    else {
      $("#btn-op-section-" + i).css("transform", "rotate(0deg)");
      $("#operations-section-" + i).addClass("d-none");
      
    }
  }

    showMoreInfoSection(i) {
      let display = $("#school-class-more-info-sec-" + i).css('display');
      if (display == "none") {
        $("#school-class-more-info-sec-" + i).css('display', 'block');
      }
      else {
        $("#school-class-more-info-sec-" + i).css('display', 'none');
      }
    }

}
