import { ResultRequest } from '@app/model/request/result-request';
import { UserParams } from './UserParams';
import { UserValidService } from '@app/component/admin/user/service/user-valid-service/user-valid-service';
import { Injectable } from '@angular/core';
declare var $ : any;

@Injectable()
export class ViewService {
    
    peselMask = [ /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    message : string = "";

    constructor(private userValidService: UserValidService) {}
    

    validateFirstName(name) {
        let isOk = this.userValidService.validNameStartGreat(name);
        this.setMessage(isOk, "imię");
    }

    validateSecondName(name) {
        let isOk = this.userValidService.validNameStartGreat(name);
        this.setMessage(isOk, "nazwisko");
    }

    validatePesel(pesel) {
        let isOk = this.userValidService.validPesel(pesel);
        this.setMessage(isOk, "pesel");
    }

    setMessage(isOk : boolean, invalidFieldName : string) {
        if (!isOk) {
            this.message = "Nieprawidłowy format dla " + invalidFieldName + ".";
        }
        else {
            this.message = null;
        }
    }

    validateUserParamsSearch(userParams : UserParams) {
        let isOk = true;
        let message = "Nieprawidłowy format dla: ";

        let isSearchByNames = (userParams.firstName != "" && userParams.lastName != "");

        if (isSearchByNames) {
            if (!this.userValidService.validNameStartGreat(userParams.firstName)) {
                message += "imię, ";
                isOk = false;
            }
    
            if (!this.userValidService.validNameStartGreat(userParams.lastName)) {
                message += "nazwisko, ";
                isOk = false;
            }
        }
        else if (userParams.pesel != "") {
            if (!this.userValidService.validPesel(userParams.pesel)) {
                message += "pesel, ";
                isOk = false;
            }
        }

        if (isOk) {
            this.message = null;
        }

        return isOk;

    }

    checkResponseCode(response : ResultRequest) {
        if (response.responseCode != 200) {
            this.message = "Niepowodzenie wyszukiwaniu. Błąd maszyny.";
        }
    }

    checkResponseResult(response) {
        if (response.result == null) {
            this.message = "Brak użytkowników o podanych parametrach";
        }
    }

}