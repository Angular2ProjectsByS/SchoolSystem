import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  login(model) {
    let url = "/api/login";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Request-Headers', 
    //     'access-control-allow-origin,content-type, Authorization');

    console.log(JSON.stringify(model));
    return this.http.post(url, JSON.stringify(model), {headers: headers}); 
  }  

}
