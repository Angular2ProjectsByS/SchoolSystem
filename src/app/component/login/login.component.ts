import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {LoginService } from '../../service/login.service';
import { Constants } from '../../constants/constants';
import * as JwtDecode from "jwt-decode";
import { UserType } from '../../constants/UserType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private credentials = {'username':'', 'password':''};
    private loggedIn: boolean;
    private isLoginError : boolean;
    private loginErrorMsg : string;

  constructor(private loginService: LoginService) {
        this.checkAdminIsLogged();
        this.checkLoginError();  
  }

  checkAdminIsLogged() {
      console.log("check admin is logged");
        if (localStorage.getItem(Constants.AdminIsLogged) == null) {
            this.loggedIn = false;
            console.log("Ustawiam na admina jak zalogowany");
        }    
        else {
            this.loggedIn = true;
            console.log("Witamy admina");
        }
  }

  checkLoginError() {
        console.log("check login errors");
        if (localStorage.getItem(Constants.LogginErrorMsg) == null || localStorage.getItem(Constants.LogginErrorMsg) == '') {
            this.isLoginError = false;    
        }
        else {
            console.log("Wystąpiły błędy logowania");
            this.isLoginError = true;
            this.loginErrorMsg = localStorage.getItem(Constants.LogginErrorMsg);
        }
  }

  onSubmit() {
      console.log("Wysyłam żądanie logowania.");
      this.loginService.login(this.credentials).subscribe(
            res => {
                //console.log(res);
                let body = JSON.parse(JSON.parse((JSON.stringify(res['_body']))));
                this.parseRoles(body.roles);

                localStorage.setItem(Constants.Token, body.token); 
                localStorage.setItem(Constants.RefreshToken, body.refreshToken);
                localStorage.setItem(Constants.Roles, JSON.stringify(Constants.UserTypes))
                
                //location.reload();

            },
            err => {

                let message = "";

                if (err.status == 401) {

                    console.log("Request Logowania zakończony niepowodzeniem");
                    message = "Logowanie nieudane. Błędne dane logowania.";
                    console.log(message);
                    
                } 
                else if (err.status < 200 || err.status >= 300) {

                    console.log("Request Logowania zakończony niepowodzeniem");
                    message = "Błąd serwera. Spróbuj jeszcze raz.";
                    console.log(message);
                    
                }  

                localStorage.setItem(Constants.LogginErrorMsg, message);

                if (localStorage.getItem(Constants.AdminIsLogged)) {
                    localStorage.removeItem(Constants.AdminIsLogged);
                }

                //location.reload();
            }
      );
  }

  parseRoles(roles): void {
     console.log("Parsuje role"); 
    for (let role of roles) {
        Constants.UserTypes.push(UserType["" + role]);
    }
  }

  ngOnInit() {
  }

}
