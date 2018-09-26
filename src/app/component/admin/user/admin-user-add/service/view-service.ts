import { NgModule, Injectable } from "@angular/core";
import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { InputMask } from "@app/component/admin/user/admin-user-add/model/input-mask";
import { UserWithRole } from "@app/component/admin/user/admin-user-add/model/user-with-role";
import { BannerMessageInfo } from "@app/model/view/banner-message-info";
import { MessageBannerService } from "@app/service/global/request/message-banner.service";
import { UserAddResultMsg } from "@app/component/admin/user/admin-user-add/message/user-add-result-msg";
import { User } from "@app/component/admin/user/model/user";

declare var $ : any;

@Injectable()
@NgModule({
    providers: [UserValidService]
  })
export class ViewService {

    isFormInputOk : boolean[] = [];
    mask : InputMask;
    bannerInfo : BannerMessageInfo;
        
    constructor(private validService : UserValidService, private messageBannerService : MessageBannerService) {
        this.mask = new InputMask();
        this.setUpFormInputOk();
    }

    setUpFormInputOk() {
        for (let i = 0; i < 15; i++) {
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

    showOperationResultMsg(result) {
        console.log("view-service");
        console.log(result);
        this.bannerInfo = this.messageBannerService.checkRespone(result, new UserAddResultMsg());
        console.log("banner-info");
        console.log(this.bannerInfo);
    }

    showValidationMsgs(user : User) {

        this.validateFirstName(user.basicInfo.firstName);
        this.validateLastName(user.basicInfo.lastName);
        this.validatePesel(user.basicInfo.pesel);

        this.validateEmail(user.contactInfo.email);
        this.validatePhoneNumber(user.contactInfo.phoneNumber);

        this.validateHouseNumber(user.contactInfo.address.houseNamber);
        this.validateApartmentNumber(user.contactInfo.address.apartmentNumber);
        this.validateZipCode(user.contactInfo.address.zipCode.name);
        this.validateCityName(user.contactInfo.address.city.name);
        this.validateStreetName(user.contactInfo.address.street.name);
        this.validateVoivodeshipName(user.contactInfo.address.voivodeship.name);
    
        this.validateBornDate(user.bornInfo.bornDate);
        this.validateBornCityName(user.bornInfo.city.name);
        this.validateBornVoivodeshipName(user.bornInfo.voivodeship.name);

        this.validateRoles(user.loginInfo.role);
    }

    validateFirstName(firstName : string) {
        let isValidOk = this.validService.validNameStartGreat(firstName);
        this.isFormInputOk[0] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "name-invalid");
     }

    validateLastName(secondName : string) {
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
        console.log(bornDate);
        if (bornDate === undefined) {
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

    validateRoles(role) {
        console.log(role);
        let isValidOk = (role.id != 0);

        this.isFormInputOk[14] = isValidOk;
        this.changeValidErrorDivDisplay(isValidOk, "user-role-invalid");
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