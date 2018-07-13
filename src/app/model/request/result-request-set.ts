import { ResultRequest } from "./result-request";


export class ResultRequestSet<T> extends ResultRequest {
    result: T[];

    setAll(response, success) {
        console.log(response);

        try {
            this.result = <T[]> response.json();
        }
        catch (Exception) {
            this.result = response._body;
        }
        this.success = success;
        this.responseCode = response.status;
    }
}