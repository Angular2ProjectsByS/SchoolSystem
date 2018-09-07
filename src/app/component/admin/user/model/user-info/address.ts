import { City } from "@app/component/admin/user/model/user-info/address-info.ts/city";
import { Street } from "@app/component/admin/user/model/user-info/address-info.ts/street";
import { ZipCode } from "@app/component/admin/user/model/user-info/address-info.ts/zip-code";
import { Voivodeship } from "@app/component/admin/user/model/user-info/address-info.ts/voivodeship";

export class Address {
    id : number = 0;
    houseNumber : string;
    apartmentNumber : string;

    city : City;
    street : Street;
    zipCode : ZipCode;
    voivodeship : Voivodeship;

    constructor() {
        this.city = new City();
        this.street = new Street();
        this.zipCode = new ZipCode();
        this.voivodeship = new Voivodeship();
    }
}