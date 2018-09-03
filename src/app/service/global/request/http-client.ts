import { Injectable, NgModule } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import { Constants } from '@app/constants/constants';
import { NgModel } from '@angular/forms';

@Injectable()
export class HttpClient {
    
    constructor(private http: Http) {}

    private addAuthorizationToHeaders(headers: Headers){
        let accessToken = localStorage.getItem(Constants.Token);
        headers.append('Authorization', accessToken);
        headers.append('Access-Control-Allow-Origin', '*');
    }

    private createAuthorizationHeader(): Headers{
        let headers = new Headers();
        let accessToken = localStorage.getItem(Constants.Token);
        headers.append('Authorization', accessToken);
        headers.append('Access-Control-Allow-Origin', '*');

        return headers;
    }
    
    public get(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.get(url, {headers: headers});
    }

    public post(url, body) {
        let headers = this.createAuthorizationHeader();
        headers.append("Content-Type", "application/json");
        return this.http.post(url, JSON.stringify(body), {headers: headers});
    }

    public delete(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.delete(url, {headers: headers}); 
    }
}