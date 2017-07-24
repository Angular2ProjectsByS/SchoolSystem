import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    this.checkAdminIsLoggedIn();
  }

  checkAdminIsLoggedIn() {
    if (localStorage.getItem("AdminIsLogged") == null) {
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }

  logout() {
    this.removeLocalStorageItems();
    location.reload();
    this.router.navigate(["./"]); 
  }

  private removeLocalStorageItems() {

    if (localStorage.getItem(Constants.AdminIsLogged) != null) {
      console.log("Usunięcie z LocalStorage AdminIsLogged ");
      localStorage.removeItem(Constants.AdminIsLogged);
    }

    if (localStorage.getItem(Constants.Token) != null) {
      console.log("Usunięcie z LocalStorage Token");
      localStorage.removeItem(Constants.Token);
    }
    
  }

  getDisplay() {
    if (this.loggedIn) {
      return "";
    }
    else {
      return "none";
    }
  }

  ngOnInit() {
  }

}
