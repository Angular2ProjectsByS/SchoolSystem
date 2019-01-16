import { ResultRequest } from '@app/model/request/result-request';
import {User} from '@app/component/admin/user/model/user';

export class ResultRequestSet<T> extends ResultRequest {
    result: T;

    setAll(response, success) {
        if (success) {
          try {
            console.log(response['_body']);
            this.result = <T> response.json();
          } catch (err) {
            console.log('zgłaszam wyjatek');
            this.result = response._body;
          }
        } else {
            this.result = response._body;

            try {
                this.errorMessage = response.json().message;
            } catch (e) {

            }
        }

        this.responseCode = response.status;
    }
}
