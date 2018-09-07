import { ContactInfo } from "@app/component/admin/user/model/user-info/contact-info";
import { BasicInfo } from "@app/component/admin/user/model/user-info/basic-info";
import { BornInfo } from "@app/component/admin/user/model/user-info/born-info";

export class User {
    id : number = 0;
    basicInfo : BasicInfo;
    contactInfo : ContactInfo;
    bornInfo : BornInfo;

    constructor() {
        this.basicInfo = new BasicInfo();
        this.contactInfo = new ContactInfo();
        this.bornInfo = new BornInfo();
    }
}