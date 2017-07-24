import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(tel: any, args?: any): any {
    var value = tel.toString().trim().replace("/^\+/", "");

    if (value.match("/[^0-9]/")) {
      return tel;
    }

    let phoneResult : string = '';

    switch (value.length) {
      case 9:
        for (let i = 0; i < value.length; i += 3) {
          phoneResult += value.slice(i, i + 3);
          if (i < 6) {
            phoneResult += " ";
          }
          console.log(value.slice(i, i + 3));
        }
        break;

        default: 
          return tel;
      
    }

    console.log("Finalny result: " + phoneResult);
    return phoneResult;
  }

}
