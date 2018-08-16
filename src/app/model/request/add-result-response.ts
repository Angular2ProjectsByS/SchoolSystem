import { ResultRequest } from "@app/model/request/result-request";
import { Prefix } from "@app/model/school-classes/details/prefix";

export class AddResultResponse<T> extends ResultRequest{
    message: string;
    addedElements: T[];

    setAll(body, success) {

        this.responseCode = body.status;
        this.success = success;

        let result = JSON.parse(body._body);

        if (this.responseCode == 409) {
            this.message = result.message;
            this.addedElements = result.addedElements;
        }
        else {
            this.addedElements = result;
        }        
    }
}