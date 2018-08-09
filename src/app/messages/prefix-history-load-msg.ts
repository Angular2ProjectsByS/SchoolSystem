import { ResponseMessages } from "@app/model/view/response-messages";

export class PerfixHistoryLoadMsg extends ResponseMessages {

    constructor() {
        super();
        this.code200 = "Pobranie historii dla prefiksu zakończone powodzeniem";
        this.code400 = "Pobranie historii dla prefisku zakończone niepowdzeniem.";
        this.code500 = this.code500;
    }

}