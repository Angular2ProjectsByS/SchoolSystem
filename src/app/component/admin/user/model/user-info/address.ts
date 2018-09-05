import { City } from "@app/component/admin/user/model/user-info/address-info.ts/city";
import { Street } from "@app/component/admin/user/model/user-info/address-info.ts/street";
import { ZipCode } from "@app/component/admin/user/model/user-info/address-info.ts/zip-code";
import { Voivodeship } from "@app/component/admin/user/model/user-info/address-info.ts/voivodeship";

export class Address {
    id : number;
    houserNumber : string;
    apartmentNumber : string;

    city : City;
    street : Street;
    zipCode : ZipCode;
    voivodeship : Voivodeship;
}