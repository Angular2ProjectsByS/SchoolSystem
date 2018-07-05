import { ResultRequest } from "./result-request";


export class ResultRequestSet<T> extends ResultRequest {
    result: T[];

    setAll(response, success) {
        try {
            this.result = <T[]> response.json();
        }
        catch (Exception) {
            
        }
        this.success = success;
        this.responseCode = response.status;
    }
}