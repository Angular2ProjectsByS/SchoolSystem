import { Injectable } from '@angular/core';
import { HttpClient } from './http-client';

@Injectable()
export class RestService {

  constructor(private httpClient : HttpClient) {  }

  entityClass : any;
  
  async get<T>(url:string) {
    
    console.log("Wykonuję rządanie");
    
    let result = null;

    await this.httpClient.get(url).subscribe(
      res => {
        result = <T[]> res.json();
        console.log("RestService:get() Mam dane" + result);
        console.log(result);
      },
      err => {
        result = null;
      }
    );

    console.log("Zwracam wynik");
    return result;
  }

}
