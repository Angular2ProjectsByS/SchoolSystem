import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Role } from '../../model/role';
import { User } from '../../model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private roles: Role[];
  private msgError: string;
  private selectedRole: Role;
  private user: User = new User();

  constructor(private userService : UserService) {
    this.initRoleList();
  }

  private initRoleList() {
    this.userService.getAllRoles().subscribe(
      res => {
        this.roles = <Role[]> res.json();
      },
      err => {
        this.msgError = "Nie udało sie załoadować poprawnie roli: " + err.status;
      }
    );
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      res => {
        this.msgError = "Dodanie użytkownika zakończone sukcesem. Status: " + res.status;
      },
      err => {
        this.msgError = "Dodanie użytkowanika zakończone niepowodzeniem. Status " + err.status;
      }
    );
  }

  ngOnInit() {
  }

}
