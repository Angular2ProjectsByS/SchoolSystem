import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { RestService } from '@app/service/global/request/rest-service.service';
import { URLS } from '@app/constants/urls';
import { PaginParam } from '@app/model/view/pagin-param';
declare var $ : any;

@Component({
  selector: 'app-admin-pagin',
  templateUrl: './app-admin-pagin.component.html',
  styleUrls: ['./app-admin-pagin.component.css']
})
export class AppAdminPaginComponent implements OnChanges {


  @Input()
  numberEntities : number;

  @Input() 
  isFoundPrefixes : boolean;

  numberPages: number = 0;
  numberForPage: number = 10;

  @Output() paginationRequestTrigger : EventEmitter<PaginParam> = new EventEmitter<PaginParam>();

  constructor(private restService: RestService) { 
     
  }

  ngAfterViewInit() {
    this.setup();
  }

  ngOnChanges() {
    console.log("Zamiany w AppAdminPagin");
    if (this.isFoundPrefixes) {
      this.countNumberPages(this.numberEntities);
    }
  }

  ngAfterContentInit() {

  }

  async setup() {
    let numberEntites = await this.getNumberOfEntities(); 
    this.countNumberPages(numberEntites);
  }

  async getNumberOfEntities() : Promise<number> {
    let result = await this.restService.count(URLS.prefixes.count);
    return result;
  }

  countNumberPages(result) {
    console.log("countNumberPages");

    if (result != null) {
      this.numberPages = Math.ceil(result / this.numberForPage);
      this.setPageItemActive(0);
    }

    console.log("numberPages" + this.numberPages);
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
