import { Voivodeship } from "@app/component/admin/user/model/user-info/address/voivodeship";
import { City } from "@app/component/admin/user/model/user-info/address/city";

export class BornInfo {
    id : number = 0;
    bornDate : Date;
    voivodeship : Voivodeship;
    city : City;

    constructor() {
        this.city = new City();
        this.voivodeship = new Voivodeship();
    }
}