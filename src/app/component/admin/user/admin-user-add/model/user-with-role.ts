import { User } from "@app/component/admin/user/model/user";
import { Role } from "@app/model/role";

export class UserWithRole {
    user : User;
    role : Role;

    constructor() {
        this.user = new User();
        this.role = new Role();
    }
}