import { UserRole } from '@app/model/user-role';

export class User {
    userId: number;
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    userRoles : UserRole[] = [];
}