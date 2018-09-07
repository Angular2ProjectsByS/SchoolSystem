import { Address } from "@app/component/admin/user/model/user-info/address";


export class ContactInfo {
    id : number = 0;
    email : string;
    phoneNumber : string;
    address : Address;

    constructor() {
        this.address = new Address();
    }
}