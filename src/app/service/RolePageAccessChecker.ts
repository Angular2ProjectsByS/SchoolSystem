import { UserType } from "@app/constants/UserType"
import { Constants } from "@app/constants/constants"

export class RolePageAccessChecker {

    checkAccesForPage(userType: UserType) : void {
        let loggedUserTypes: Array<UserType> = JSON.parse(localStorage.getItem(Constants.Roles));
        console.log(loggedUserTypes);
    }

}