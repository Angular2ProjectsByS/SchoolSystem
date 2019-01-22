import { Component, OnInit, Input } from '@angular/core';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';

@Component({
  selector: 'app-school-class-more-info',
  templateUrl: './school-class-more-info.component.html',
  styleUrls: ['./school-class-more-info.component.css']
})
export class SchoolClassMoreInfoComponent implements OnInit {

  @Input() schoolClass: SchoolClass = new SchoolClass();

  constructor() { }

  ngOnInit() {
    console.log('schoolClass');
    console.log(this.schoolClass);
    console.log(this.schoolClass.students);
  }

}
