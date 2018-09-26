import { ResultRequest } from "@app/model/request/result-request";
import { BaseDetail } from "@app/model/school-classes/details/base-detail";

export class AddResultResponse<T> extends ResultRequest{
    message: string;
    addedElements: T[];

    setAll(body, success) {

        this.responseCode = body.status;
    
        let result;
        if (success) {
            try {
                result = JSON.parse(body._body);
                this.addedElements = result;
            }
            catch (Exception) {
                
            }
            
        }   
        else {
            if (this.responseCode == 409) {
                result = JSON.parse(body._body);
                this.message = result.message;
                this.addedElements = result.addedElements;
            }
        } 
                           
    }
}