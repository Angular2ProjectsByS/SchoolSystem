import { Component, OnInit } from '@angular/core';
import { AdminClassTypeModelView } from '@app/component/admin/pages/class-types/view-model/admin-class-type-model-view';

@Component({
  selector: 'app-admin-class-type',
  templateUrl: './admin-class-type.component.html',
  styleUrls: ['./admin-class-type.component.css']
})
export class AdminClassTypeComponent implements OnInit {

  modelWrapper : AdminClassTypeModelView;

  constructor() {
    this.modelWrapper = new AdminClassTypeModelView();
   }

  ngOnInit() {
  }

}
