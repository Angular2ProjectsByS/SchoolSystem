import { Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges, Output } from '@angular/core';
import { User } from '@app/component/admin/user/model/user';
import { ViewService } from '@app/component/admin/user/admin-user-list/view-service';
import { RestService } from '@app/service/global/request/rest-service.service';
import { Constants } from '@app/constants/constants';



@Component({
  selector: 'app-found-user-list',
  templateUrl: './found-user-list.component.html',
  styleUrls: ['./found-user-list.component.css'],
  providers: [RestService, ViewService]
})
export class FoundUserListComponent implements OnInit {
  
  @Input() users : User[];
  viewService : ViewService;
  @Output() chosenUser : EventEmitter<User> = new EventEmitter<User>();
  @Input() isSearchResultForm : boolean;
  @Input() infoOnly : boolean = false;


  constructor(private restService: RestService, viewService: ViewService) { 
    this.viewService = viewService;
  }

  chooseUser(i) {
    console.log("chooseUser");
    console.log(this.users[i]);
    this.chosenUser.emit(this.users[i]);
  }

  deleteUser(i) {
    this.users.splice(i, 1);
  }

  ngOnInit() {
    console.log("Użytkownicy w found-user-component");
    console.log(this.users); 
  }

}
