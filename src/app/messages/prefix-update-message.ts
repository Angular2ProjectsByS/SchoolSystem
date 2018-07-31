import { ResponseMessages } from "@app/model/view/response-messages";
import { Constants } from "@app/constants/constants";

export class PrefixUpdateMessage extends ResponseMessages {

    constructor() {
        super();
        this.code200 = Constants.prefixes.update.success;
        this.code400 = Constants.prefixes.update.failure;
        this.code500 = Constants.prefixes.update.failure;
    }

}