import { Injectable } from '@angular/core';
import { User } from "@app/component/admin/user/model/user";

@Injectable()
export class UserToEditParam {
    user: User;

    constructor() {
        
    }
}