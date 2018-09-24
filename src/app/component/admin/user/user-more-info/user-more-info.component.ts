import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/component/admin/user/model/user';

@Component({
  selector: 'app-user-more-info',
  templateUrl: './user-more-info.component.html',
  styleUrls: ['./user-more-info.component.css']
})
export class UserMoreInfoComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
