import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {LoginService } from '@app/service/login.service';
import { Constants } from '@app/constants/constants';
import * as JwtDecode from "jwt-decode";
import { UserType } from '@app/constants/UserType';
import { PageNavigator } from "@app/service/PageNavigator";

@Component({
  selector: 'app-login',
  providers: [PageNavigator],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private credentials = {'username':'', 'password':''};
    private loggedIn: boolean;
    private isLoginError : boolean;
    private loginErrorMsg : string;

  constructor(private loginService: LoginService, private pageNavigator : PageNavigator) {
        this.checkAdminIsLogged();
        this.checkLoginError();
  }

  checkAdminIsLogged() {
      console.log("check admin is logged");
        if (localStorage.getItem(Constants.IsUserLogged) == null) {
            this.loggedIn = false;
            console.log("Ustawiam użytkownika na zalogowanego");
        }    
        else {
            this.loggedIn = true;
            console.log("Witamy użytkownika");
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
      this.loginService.login(this.credentials).toPromise().then(
            res => {
                //console.log(res);
                let body = JSON.parse(JSON.parse((JSON.stringify(res['_body']))));
                

                let decodedToken = JwtDecode(body.token);
                console.log("Decoded token: ");
                console.log(decodedToken["scopes"]);    
                let userTypes: UserType[] = this.parseRoles(decodedToken["scopes"]);

                console.log("UserTypes: ");
                for (let userType of userTypes) {
                    console.log(userType);
                }

                localStorage.setItem(Constants.Token, body.token); 
                localStorage.setItem(Constants.RefreshToken, body.refreshToken);
                localStorage.setItem(Constants.Roles, JSON.stringify(userTypes))

                this.pageNavigator.navigateToUserPanel(userTypes)
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

                if (localStorage.getItem(Constants.IsUserLogged)) {
                    localStorage.removeItem(Constants.IsUserLogged);
                }

                location.reload();
            }
      );
  }

  parseRoles(roles): UserType[] {
    let userTypes: UserType[] = [];
     for (let role of roles) {
        userTypes.push(UserType["" + role]);
    }

    return userTypes;
  }

  ngOnInit() {
  }

}
