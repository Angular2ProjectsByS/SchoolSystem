import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Constants } from '../../../constants/constants';

@Injectable()
export class HttpClient {
    
    constructor(private http: Http) {}

    private createAuthorizationHeader(headers: Headers) {
        let accessToken = localStorage.getItem(Constants.Token);
        console.log(accessToken);
        headers.append('Authorization', accessToken);
        headers.append('Access-Control-Allow-Origin', '*');
    }
    

    public get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {headers: headers});
    }

    public post(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, {headers: headers});
    }
}