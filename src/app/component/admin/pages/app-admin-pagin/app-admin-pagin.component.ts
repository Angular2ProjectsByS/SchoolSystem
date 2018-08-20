import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { URLS } from '@app/constants/urls';
import { PaginParam } from '@app/model/view/pagin-param';
declare var $ : any;

@Component({
  selector: 'app-admin-pagin',
  templateUrl: './app-admin-pagin.component.html',
  styleUrls: ['./app-admin-pagin.component.css']
})
export class AppAdminPaginComponent {

  numberPages: number = 0;
  numberForPage: number = 10;

  @Output() paginationRequestTrigger : EventEmitter<PaginParam> = new EventEmitter<PaginParam>();

  constructor(private restService: RestService) { 
     
  }

  ngAfterViewInit() {
    this.countNumberPages();
  }

  ngAfterContentInit() {
    this.countNumberPages();
  }

  async countNumberPages() {
    let result = await this.restService.get<number>(URLS.prefixes.count);

    if (result.responseCode == 200) {
      this.numberPages = Math.ceil(result.result / this.numberForPage);
      this.setPageItemActive(0);
    }
  }

  paginItemClick(i) {
    this.passPaginationParamToRequest(i);
    this.setPageItemActive(i);
  }

  passPaginationParamToRequest(i) {
    let offset = i * this.numberForPage;
    let paginParam = new PaginParam(this.numberForPage, offset);
    console.log("Wysyłam emitter");
    this.paginationRequestTrigger.emit(paginParam);
  }

  setPageItemActive(i) {
    $( document ).ready(function() {
      $("li.active").removeClass("active");
      $("#page-item-" + i).addClass("active");
    }); 
  } 

}
