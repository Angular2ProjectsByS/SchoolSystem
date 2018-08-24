import { ResultRequest } from "@app/model/request/result-request";


export class ResultRequestSet<T> extends ResultRequest {
    result: T[];


    setAll(response, success) {
        console.log(response);

        if (success) {
            this.result = <T[]> response.json();
        }
        else {
            this.result = response._body;
            this.errorMessage = response.json().message;
        }

        this.responseCode = response.status;
    }
}