import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BaseDetailHistory } from '@app/model/school-classes/details/base-datail-history';
import { RestService } from '@app/service/global/request/rest-service.service';

@Component({
  selector: 'app-base-detail-history',
  templateUrl: './base-detail-history.component.html',
  styleUrls: ['./base-detail-history.component.css']
})
export class BaseDetailHistoryComponent implements OnInit {

  @Input()
  detailHistory: BaseDetailHistory[];

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Zmiany w AdminPrefixHistoryComponent");
    console.log(this.detailHistory);
  }

}
