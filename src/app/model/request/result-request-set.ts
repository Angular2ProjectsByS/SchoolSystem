import { ResultRequest } from "@app/model/request/result-request";


export class ResultRequestSet<T> extends ResultRequest {
    result: T[];


    setAll(response, success) {
        if (success) {
            try {
                this.result = <T[]> response.json();
            }
            catch (exception) {

            }
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