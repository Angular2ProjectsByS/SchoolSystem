import { UserRole } from '@app/model/user-role';

export class User {
    userId: number;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    userRoles : UserRole[] = [];
}