import { Constants } from "../../constants/constants";

export class BannerMessageInfo {
    
    message: string;
    alertStyle: any;

    setAll(message: string, alertStyle: any) {
        this.message = message;
        this.alertStyle = alertStyle;
    }

}