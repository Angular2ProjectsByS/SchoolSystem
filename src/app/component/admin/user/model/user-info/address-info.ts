import { City } from "@app/component/admin/user/model/user-info/address/city";
import { Street } from "@app/component/admin/user/model/user-info/address/street";
import { ZipCode } from "@app/component/admin/user/model/user-info/address/zip-code";
import { Voivodeship } from "@app/component/admin/user/model/user-info/address/voivodeship";

export class Address {
    id : number = 0;
    houseNamber : string;
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