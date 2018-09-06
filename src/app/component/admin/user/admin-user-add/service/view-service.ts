import { NgModule, Injectable } from "@angular/core";
import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { User } from "@app/component/admin/user/model/user";
import { InputMask } from "@app/component/admin/user/admin-user-add/model/input-mask";
declare var $ : any;

@Injectable()
@NgModule({
    providers: [UserValidService]
  })
export class ViewService {

    isFormInputOk : boolean[] = [];
    mask : InputMask;
    
    constructor(private validService : UserValidService) {
        this.mask = new InputMask();
        this.setUpFormInputOk();
    }

    setUpFormInputOk() {
        for (let i = 0; i < 14; i++) {
            this.isFormInputOk.push(false);
        }
    }

    checkFormCorrection() : boolean {
        let isFormOk = true;
        for (let isInputOk of this.isFormInputOk) {
            if (!isInputOk) {
                isFormOk = false;
            }
        }

        return isFormOk;
    }

    validateFirstName(firstName : string) {
        let isValidOk = this.validService.validNameStartGreat(firstName);
        this.isFormInputOk[0] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "name-invalid");
     }

    validateSecondName(secondName : string) {
        let isValidOk = this.validService.validNameStartGreat(secondName);
        this.isFormInputOk[1] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "surname-invalid");
    }

    validatePesel(pesel : string) {
        let isValidOk = this.validService.validPesel(pesel);
        this.isFormInputOk[2] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "pesel-invalid");
    }

    validateZipCode(zipCode : string) {
        let isValidOk = this.validService.validZipCode(zipCode);
        this.isFormInputOk[3] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "zip-code-invalid"); 
    }

    validateCityName(name : string) {
        let isValidOk = this.validService.validNameStartGreat(name);
        this.isFormInputOk[4] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "city-name-invalid"); 
    }

    validateStreetName(streetName : string) {
        let isValidOk = this.validService.validNameStartGreat(streetName);
        this.isFormInputOk[5] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "street-name-invalid");
    }

    validateHouseNumber(houseNumber : string) {
        let isValidOk = this.validService.validNumber(houseNumber);
        this.isFormInputOk[6] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "house-number-invalid");
    }

    validateApartmentNumber(apNumber : string) {
        let isValidOk = this.validService.validNumber(apNumber);
        this.isFormInputOk[7] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "apartment-number-invalid");
    }

    validateVoivodeshipName(name : string) {
        console.log(name);
        let isValidOk = this.validService.validName(name);
        console.log(isValidOk);
        this.isFormInputOk[8] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "voivodeship-invalid");     
    }

    validatePhoneNumber(number : string) {
        let isValidOk = this.validService.validPhoneNumber(number);
        this.isFormInputOk[9] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "phone-number-invalid");  
    }

    validateEmail(email : string) {
        let isValidOk = this.validService.validEmail(email);
        this.isFormInputOk[10] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "email-invalid");  
    }


    validateBornDate(bornDate) {
        if (bornDate == "") {
            this.changeValidErrorDivDisplay(false, "born-date-invalid");
            this.isFormInputOk[11] = false;
        }
        else {
            this.isFormInputOk[11] = true;
            this.changeValidErrorDivDisplay(true, "born-date-invalid");
        }    
    }

    validateBornCityName(name : string) {
        let isValidOk = this.validService.validNameStartGreat(name);
        this.isFormInputOk[12] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "born-city-invalid"); 
    }

    validateBornVoivodeshipName(name : string) {
        let isValidOk = this.validService.validName(name);
        this.isFormInputOk[13] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "born-voivodeship-invalid"); 
    }

    changeValidErrorDivDisplay(isValidOk : boolean, divName : string) {
        if (isValidOk) {
            this.hideDiv(divName);
        }
        else {
            this.showDiv(divName);
        }
    }

    hideDiv(divName) {
        $("#" + divName).css("display", "none");
        $("#" + divName).css("height", "0");
    }

    showDiv(divName) {
        $("#" + divName).css("display", "block");
        $("#" + divName).css("height", "auto");
    }

}