import { ResponseMessages } from '@app/model/view/response-messages';
import {ValidationService} from '@app/service/validation/edit-add-user-valid-service';
import {Injectable, NgModule} from '@angular/core';

@NgModule({
  providers: [ValidationService]
})
@Injectable()
export class ViewService {
    addSchoolClassResultMsg: ResponseMessages = new ResponseMessages();

    constructor(protected validService: ValidationService) {
        this.setUpAddMessage();
    }

    validateStartDate(date) {
      this.validateStartDate(date);
    }

    setUpAddMessage() {
        this.addSchoolClassResultMsg.code200 = 'Dodanie klasy zakończone powodzeniem.';
        this.addSchoolClassResultMsg.code400 = 'Dodanie klasy zakończone niepowodzeniem.';
        this.addSchoolClassResultMsg.code500 = this.addSchoolClassResultMsg.code400;
    }
}
