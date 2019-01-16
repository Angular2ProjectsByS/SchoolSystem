import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {LoginService } from '@app/service/login.service';
import { Constants } from '@app/constants/constants';
import * as JwtDecode from 'jwt-decode';
import { UserType } from '@app/constants/UserType';
import { PageNavigator } from '@app/service/PageNavigator';

@Component({
  selector: 'app-login',
  providers: [PageNavigator],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private credentials = {'username': '', 'password': ''};
    private loginErrorMsg = '';

  constructor(private loginService: LoginService, private pageNavigator: PageNavigator) {
        this.checkUserIsLogged();
  }

  checkUserIsLogged() {
      console.log('checkUserIsLogged');
      console.log(localStorage.getItem(Constants.IsUserLogged));
      if (localStorage.getItem(Constants.IsUserLogged) !== null) {
        console.log('user should be redirect');
        this.pageNavigator.navigateToUserPanel(
          JSON.parse(localStorage.getItem(Constants.Roles))
        )
      }
  }

  onSubmit() {
      this.loginService.login(this.credentials).toPromise().then(
            res => {
                console.log('otrzymałem odpowiedź');
                const body = JSON.parse(JSON.parse((JSON.stringify(res['_body']))));

                const decodedToken = JwtDecode(body.token);
                console.log('Decoded token: ');
                console.log(decodedToken);
                const userTypes: UserType[] = this.parseRoles(decodedToken['scopes']);

                console.log('UserTypes: ');
                for (const userType of userTypes) {
                    console.log(userType);
            }

              localStorage.setItem(Constants.RefreshToken, body.refreshToken);
                localStorage.setItem(Constants.Token, body.token);
                localStorage.setItem(Constants.Roles, JSON.stringify(userTypes));
                console.log('ustawiam isUserLogged');
                localStorage.setItem(Constants.IsUserLogged, String(true));
                localStorage.setItem(Constants.UserId, decodedToken['iss']);

                this.pageNavigator.navigateToUserPanel(userTypes)
            },
            err => {
                console.log('Mamy error');

                let message = '';

                if (err.status === 401) {

                    console.log('Request Logowania zakończony niepowodzeniem');
                    message = 'Logowanie nieudane. Błędne dane logowania.';
                    console.log(message);

                } else if (err.status < 200 || err.status >= 300) {

                    console.log('Request Logowania zakończony niepowodzeniem');
                    message = 'Błąd serwera. Spróbuj jeszcze raz.';
                    console.log(message);

                }

                localStorage.setItem(Constants.LogginErrorMsg, message);

                if (localStorage.getItem(Constants.IsUserLogged)) {
                    localStorage.removeItem(Constants.IsUserLogged);
                }

                this.loginErrorMsg = message;
            }
      );
  }

  parseRoles(roles): UserType[] {
    const userTypes: UserType[] = [];
     for (const role of roles) {
        userTypes.push(UserType['' + role]);
    }

    return userTypes;
  }

  ngOnInit() {

  }

}
