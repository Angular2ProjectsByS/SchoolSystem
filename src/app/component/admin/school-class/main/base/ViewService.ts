import { ResponseMessages } from "@app/model/view/response-messages";

export class ViewService {
    
    addSchoolClassResultMsg : ResponseMessages = new ResponseMessages();

    constructor() {
        this.setUpAddMessage();
    }

    setUpAddMessage() {
        this.addSchoolClassResultMsg.code200 = "Dodanie klasy zakończone powodzeniem.";
        this.addSchoolClassResultMsg.code400 = "Dodanie klasy zakończone niepowodzeniem.";
        this.addSchoolClassResultMsg.code500 = this.addSchoolClassResultMsg.code400;
    }
}