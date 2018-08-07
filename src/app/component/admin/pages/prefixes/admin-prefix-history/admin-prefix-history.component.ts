import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PrefixHistory } from '@app/model/school-classes/details/prefix-history';
import { RestService } from '@app/service/global/request/rest-service.service';

@Component({
  selector: 'app-admin-prefix-history',
  templateUrl: './admin-prefix-history.component.html',
  styleUrls: ['./admin-prefix-history.component.css']
})
export class AdminPrefixHistoryComponent implements OnInit, OnChanges {

  @Input()
  prefixHistory: PrefixHistory[];

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Zmiany w AdminPrefixHistoryComponent");
    console.log(this.prefixHistory);
  }

}
