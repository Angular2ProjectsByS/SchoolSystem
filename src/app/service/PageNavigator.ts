import { UserType } from "@app/constants/UserType";
import { Router } from '@angular/router';
import { defaultUrlMatcher } from "@angular/router/src/shared";
import { Injectable } from "@angular/core";

@Injectable()
export class PageNavigator {

      public constructor(private router: Router) {}

      public navigateToUserPanel(userTypes: Array<UserType>)  {
            if (userTypes.length > 1) {
                this.navigateToUserPanelSelector(userTypes);
            } else {
                this.navigateDirectlyToUserPanel(userTypes);
            }
      }

      private navigateDirectlyToUserPanel(userTypes: Array<UserType>) {
            switch (userTypes[0]) {
                case UserType.ADMIN:
                    this.router.navigateByUrl('admin');
                    break;
              case UserType.TEACHER:
                    console.log('route to teacher');
                    this.router.navigateByUrl('teacher');
                    break;
                default:
                    console.log('Nie ma strony dla takiego typu użytkownika');
            }
      }

      private navigateToUserPanelSelector(userTypes: Array<UserType>) {

      }
}
