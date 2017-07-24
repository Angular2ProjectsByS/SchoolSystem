import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Role } from '../../model/role';
import { User } from '../../model/user';
import { UserRole } from '../../model/user-role';
import { PhoneNumberPipe } from '../../pipe/phone-number.pipe';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
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
    //console.log(this.selectedRole.name);
    this.user.userRoles[0] = new UserRole();
    this.user.userRoles[0].roleId = this.selectedRole.roleId;
    this.userService.addUser(this.user).subscribe(
      res => {
        this.msgError = "Dodanie użytkownika zakończone sukcesem. Status: " + res.status;
      },
      err => {
        if (err.headers.get("error_message") != null) {
          this.msgError = err.headers.get("error_message") + " Status " + err.status;
        }
        else {
          this.msgError = "Dodanie użytkowanika zakończone niepowodzeniem. Status " + err.status;
        }

      }
    );
  }

  ngOnInit() {
  }

}
