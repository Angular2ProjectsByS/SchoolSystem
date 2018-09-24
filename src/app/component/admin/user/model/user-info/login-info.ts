import { Role } from "@app/component/admin/user/model/user-info/role";

export class LoginInfo {
    id : number;
    username : string;
    password : string;
    role : Role;

    constructor() {
        this.role = new Role();
    }

}