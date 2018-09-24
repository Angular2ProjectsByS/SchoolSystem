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
            
            try {
                this.errorMessage = response.json().message;
            }
            catch(e) {

            }
        }

        this.responseCode = response.status;
    }
}