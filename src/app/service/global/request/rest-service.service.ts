import { Injectable } from '@angular/core';
import { HttpClient } from './http-client';
import { ResultRequestSet } from '../../../model/request/result-request-set';
import { ResultRequest } from '../../../model/request/result-request';

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

  async delete(url) : Promise<ResultRequest> {
    let requestResult: ResultRequest = new ResultRequest();

    await this.httpClient.delete(url).toPromise().then(
      res => {
        requestResult.setAll(res.status, true);
      },
      err => {
        requestResult.setAll(err.status, false);
      }
    )

    return requestResult;
  }

}
