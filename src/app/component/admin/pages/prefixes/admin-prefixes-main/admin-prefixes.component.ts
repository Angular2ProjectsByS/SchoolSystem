import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminPrefixModelView } from '@app/component/admin/pages/prefixes/view-model/admin-prefix-model-view';
declare var $ : any;

@Component({
  selector: 'app-admin-prefixes',
  templateUrl: './admin-prefixes.component.html',
  styleUrls: ['./admin-prefixes.component.css']
})
export class AdminPrefixesComponent  implements OnInit{

  modelWrapper : AdminPrefixModelView;

  constructor() {
    this.modelWrapper = new AdminPrefixModelView();
  }

  ngOnInit() {
    
  }
}
