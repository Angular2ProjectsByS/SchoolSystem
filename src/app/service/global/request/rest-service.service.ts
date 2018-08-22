import { Injectable } from '@angular/core';
import { HttpClient } from '@app/service/global/request/http-client';
import { ResultRequestSet } from '@app/model/request/result-request-set';
import { ResultRequest } from '@app/model/request/result-request';
import { AddResultResponse } from '@app/model/request/add-result-response';

@Injectable()
export class RestService {

  constructor(private httpClient : HttpClient) {  }


  async get<T>(url:string) : Promise<ResultRequestSet<T>> {
  
    let resultRequestSet = new ResultRequestSet<T>();

    await this.httpClient.get(url).toPromise().then(
      res => {
        resultRequestSet.setAll(res, true);
      },
      err => {
        resultRequestSet.setAll(err, false);
      }
    );

    return resultRequestSet;
  }

  async count(url) : Promise<number> {

    let result = null;

    await this.httpClient.get(url).toPromise().then(
      res => {
        console.log("res: ");
        console.log(res);
        result = res.json();
      },
      err => {
        
      }
    );

    return result;
  }

  async delete(url) : Promise<ResultRequest> {
    let requestResult: ResultRequest = new ResultRequest();

    await this.httpClient.delete(url).toPromise().then(
      res => {
        requestResult.setAll(res.status, true);
      },
      err => {
        requestResult.setAll(err.status, false);
      }
    );

    return requestResult;
  }

  async add<T>(url, body) : Promise<AddResultResponse<T>> {
    let requestResultSet = new AddResultResponse<T>();

    await this.httpClient.post(url, body).toPromise().then(
      res => {
        console.log("RestService: add");
        console.log(res);
        requestResultSet.setAll(res, true);
      },
      err => {
        requestResultSet.setAll(err, false);
      }
    );

    return requestResultSet;

  }

  async update(url, body) : Promise<ResultRequestSet<string>> {
    let requestResultSet = new ResultRequestSet<string>();

    await this.httpClient.post(url, body).toPromise().then(
      res => {
        requestResultSet.setAll(res, true);
      },
      err => {
        requestResultSet.setAll(err, false);
      }
    );

    return requestResultSet;

  }

  async post<T>(url, body) : Promise<ResultRequestSet<T>> {
    let requestResultSet = new ResultRequestSet<T>();

    await this.httpClient.post(url, body).toPromise().then(
      res => {
        console.log("RestService: add");
        console.log(res);
        requestResultSet.setAll(res, true);
      },
      err => {
        requestResultSet.setAll(err, false);
      }
    );

    return requestResultSet;

  }

}
