import { ResponseMessages } from "@app/model/view/response-messages";

export class DetailHistoryLoadMsg extends ResponseMessages {

    constructor() {
        super();
        this.code200 = "Pobranie historii zakończone powodzeniem";
        this.code400 = "Pobranie historii zakończone niepowdzeniem.";
        this.code500 = this.code500;
    }

}