import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  private loggedIn: boolean;

  constructor(private loginService : LoginService, private router : Router) {
    this.checkAdminIsLoggedIn();
  }

   checkAdminIsLoggedIn() {
    if (localStorage.getItem("AdminIsLogged") == null ||
      localStorage.getItem("AdminIsLogged") == '') {
        this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
   }

   logout() {
    
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
