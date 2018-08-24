import { ResponseMessages } from "@app/model/view/response-messages";
import { Constants } from "@app/constants/constants";

export class DetailUpdateMessage extends ResponseMessages {

    constructor(successMsg, failureMsg) {
        super();
        this.code200 = successMsg;
        this.code400 = failureMsg;
        this.code500 = failureMsg;
    }

}