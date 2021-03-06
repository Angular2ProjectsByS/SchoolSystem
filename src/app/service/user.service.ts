import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from "@app/model/user";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllRoles() {
    
    let url = "/api/admin/role/all";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append("authorization", localStorage.getItem("Token"));

    return this.http.get(url, {headers: headers});
  }

  addUser(user: User) {
    let url = "/api/admin/user/add";
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append("authorization", localStorage.getItem("Token"));  

    console.log(JSON.stringify(user));

    return this.http.post(url, JSON.stringify(user), {headers: headers});
  }

}
