import { ResponseMessages } from "@app/model/view/response-messages";

export class UserAddResultMsg extends ResponseMessages {

    constructor() {
        super();
        this.code200 = "Dodanie użytkownika do bazy zakończone powodzeniem.";
        this.code400 = "Dodanie użytkownika do bazy zakończone niepowodzeniem.";
        this.code500 = this.code400;
    }

}