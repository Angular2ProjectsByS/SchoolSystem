import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Constants } from '../../../constants/constants';

@Injectable()
export class HttpClient {
    
    constructor(private http: Http) {}

    private addAuthorizationToHeaders(headers: Headers){
        let accessToken = localStorage.getItem(Constants.Token);
        console.log(accessToken);
        headers.append('Authorization', accessToken);
        headers.append('Access-Control-Allow-Origin', '*');
    }

    private createAuthorizationHeader(): Headers{
        let headers = new Headers();
        let accessToken = localStorage.getItem(Constants.Token);
        console.log(accessToken);
        headers.append('Authorization', accessToken);
        headers.append('Access-Control-Allow-Origin', '*');

        return headers;
    }
    
    public get(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.get(url, {headers: headers});
    }

    public post(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.post(url, {headers: headers});
    }

    public delete(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.delete(url, {headers: headers}); 
    }
}