import { NgModule, Injectable } from '@angular/core';
import { ValidationService } from "@app/service/validation/edit-add-user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

@NgModule({
    providers: [UserValidationPattern]
  })
  @Injectable()
export class UserValidService extends ValidationService {

    constructor(private validPattern : UserValidationPattern) {
        super();
    }

    validNameStartGreat(name) {
        return this.validate(name, this.validPattern.nameStartGreat);
    }

    validName(name) {
        return this.validate(name, this.validPattern.name);
    }


    validPesel(pesel) {
        return this.validate(pesel, this.validPattern.pesel);
    }

    validZipCode(zipCode) {
        return this.validate(zipCode, this.validPattern.zipCode);
    }

    validNumber(number) {
        return this.validate(number, this.validPattern.number);
    } 

    validPhoneNumber(number) {
        return this.validate(number, this.validPattern.phoneNumber);
    }

    validEmail(email) {
        return this.validate(email, this.validPattern.email);
    }
}