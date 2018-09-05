import { Voivodeship } from "@app/component/admin/user/model/user-info/address-info.ts/voivodeship";
import { City } from "@app/component/admin/user/model/user-info/address-info.ts/city";

export class BornInfo {
    id : number;
    bornDate : Date;
    voivodeship : Voivodeship;
    city : City;
}