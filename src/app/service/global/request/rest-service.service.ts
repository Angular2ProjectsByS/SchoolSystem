import { Injectable } from '@angular/core';
import { HttpClient } from '@app/service/global/request/http-client';
import { ResultRequestSet } from '@app/model/request/result-request-set';
import { ResultRequest } from '@app/model/request/result-request';
import { AddResultResponse } from '@app/model/request/add-result-response';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [HttpClient]
})
export class RestService {

  constructor(private httpClient: HttpClient) {  }


  async get<T>(url: string): Promise<ResultRequestSet<T>> {

    const resultRequestSet = new ResultRequestSet<T>();
    console.log(url);
    await this.httpClient.get(url).toPromise().then(
      res => {
        // console.log('res from restService');
        // console.log(res['_body']);
        resultRequestSet.setAll(res, true);
      },
      err => {
        resultRequestSet.setAll(err, false);
      }
    );

    return resultRequestSet;
  }

  async count(url): Promise<number> {

    let result = null;

    await this.httpClient.get(url).toPromise().then(
      res => {
        result = res.json();
      },
      err => {

      }
    );

    return result;
  }

  async delete(url): Promise<ResultRequest> {
    const requestResult: ResultRequest = new ResultRequest();

    await this.httpClient.delete(url).toPromise().then(
      res => {
        requestResult.setAll(res, true);
      },
      err => {
        requestResult.setAll(err, false);
      }
    );

    return requestResult;
  }

  async add<T>(url, body): Promise<AddResultResponse<T>> {
    const requestResultSet = new AddResultResponse<T>();

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

  async update(url, body): Promise<ResultRequest> {
    const requestResultSet = new ResultRequest();

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

  async post<T>(url, body): Promise<ResultRequestSet<T>> {
    const requestResultSet = new ResultRequestSet<T>();

    await this.httpClient.post(url, body).toPromise().then(
      res => {
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
