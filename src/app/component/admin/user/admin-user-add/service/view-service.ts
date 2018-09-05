import { NgModule, Injectable } from "@angular/core";
import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { User } from "@app/component/admin/user/model/user";
declare var $ : any;

@Injectable()
@NgModule({
    providers: [UserValidService]
  })
export class ViewService {
    
    constructor(private validService : UserValidService) {}

    validateForm(user : User) {
        this.validateFirstName(null);
        this.validateSecondName(null);
        this.validatePesel(null);
        this.validateZipCode(null);
        this.validateCityName(null);
        this.validateStreetName(null);
        this.validateHouseNumber(null);
        this.validateVoivodeshipName(null);
        this.validatePhoneNumber(null);
        this.validateNumber(null);
        this.validateBornDate(null);
        this.validateBornCityName(null);
        this.validateBornVoivodeshipName(null);
    }

    validateFirstName(firstName : string) {
        let isValidOk = this.validService.validName(firstName);
        this.changeValidErrorDivDisplay(isValidOk, "name-invalid");
     }

    validateSecondName(secondName : string) {
        let isValidOk = this.validService.validName(secondName);
        this.changeValidErrorDivDisplay(isValidOk, "surname-invalid");
    }

    validatePesel(pesel : string) {
        let isValidOk = this.validService.validPesel(pesel);
        this.changeValidErrorDivDisplay(isValidOk, "pesel-invalid");
    }

    validateZipCode(zipCode : string) {
        let isValidOk = this.validService.validZipCode(zipCode);
        this.changeValidErrorDivDisplay(isValidOk, "zip-code-invalid"); 
    }

    validateCityName(name : string) {
        let isValidOk = this.validService.validName(name);
        this.changeValidErrorDivDisplay(isValidOk, "city-name-invalid"); 
    }

    validateStreetName(streetName : string) {
        let isValidOk = this.validService.validName(streetName);
        this.changeValidErrorDivDisplay(isValidOk, "street-name-invalid");
    }

    validateHouseNumber(houseNumber : string) {
        let isValidOk = this.validService.validNumber(houseNumber);
        this.changeValidErrorDivDisplay(isValidOk, "house-number-invalid");
    }

    validateApartmentNumber(apNumber : string) {
        let isValidOk = this.validService.validNumber(apNumber);
        this.changeValidErrorDivDisplay(isValidOk, "apartment-number-invalid");
    }

    validateVoivodeshipName(name : string) {
        let isValidOk = this.validService.validName(name);
        this.changeValidErrorDivDisplay(isValidOk, "voivodeship-invalid");     
    }

    validatePhoneNumber(number : string) {
        let isValidOk = this.validService.validPhoneNumber(number);
        this.changeValidErrorDivDisplay(isValidOk, "phone-number-invalid");  
    }

    validateEmail(email : string) {
        let isValidOk = this.validService.validEmail(email);
        this.changeValidErrorDivDisplay(isValidOk, "email-invalid");  
    }

    validateNumber(email : string) {

    }

    validateBornDate(bornDate) {

    }

    validateBornCityName(name : string) {

    }

    validateBornVoivodeshipName(name : string) {

    }

    changeDisplay(tagName) {

    }

    appendMessage(tagName, invalidMsg) {

    }

    changeValidErrorDivDisplay(isValidOk, divName) {
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