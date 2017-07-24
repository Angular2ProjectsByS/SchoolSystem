import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {LoginService } from '../../service/login.service';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private model = {'username':'', 'password':''};
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
      this.loginService.login(this.model).subscribe(
            res => {

                console.log("Udało się zalogować");
                var headers = res.headers;

                console.log("Date: " + headers.get("Date"));
                console.log("Authorization: " + headers.get("Authorization"));
                var token = res.headers.get("authorization");
                console.log("Token: " + token);
                localStorage.setItem(Constants.Token, token); 
                localStorage.setItem(Constants.AdminIsLogged, "true");
                location.reload();

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

                location.reload();
            }
      );
  }

  ngOnInit() {
  }

}
