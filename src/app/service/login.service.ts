import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  login(credentials) {
    let url = "/rest/api/auth/login";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    console.log(JSON.stringify(credentials));
    return this.http.post(url, JSON.stringify(credentials), {headers: headers}); 
  }  

  

}
