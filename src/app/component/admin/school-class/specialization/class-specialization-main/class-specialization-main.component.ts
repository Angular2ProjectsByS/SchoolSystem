import { ModuleWithProviders } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClassSpecializationModelView } from '@app/component/admin/school-class/specialization/model/ClassSpecializationModelView';

@Component({
  selector: 'app-class-specialization-main',
  templateUrl: './class-specialization-main.component.html',
  styleUrls: ['./class-specialization-main.component.css']
})
export class ClassSpecializationMainComponent implements OnInit {

  modelWrapper : ClassSpecializationModelView;

  constructor() { 
    this.modelWrapper = new ClassSpecializationModelView();
  }

  ngOnInit() {
  }

}
