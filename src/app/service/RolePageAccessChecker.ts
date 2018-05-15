import { UserType } from "../constants/UserType"
import { Constants } from "../constants/constants"

export class RolePageAccessChecker {

    checkAccesForPage(userType: UserType) : void {
        let loggedUserTypes: Array<UserType> = JSON.parse(localStorage.getItem(Constants.Roles));
        console.log(loggedUserTypes);
    }

}