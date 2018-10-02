import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearToNumber'
})
export class YearToNumberPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    
    let startDate = new Date(value); 

    let schoolClassYear = startDate.getFullYear();
    
    let actualYear = new Date().getFullYear();
    let actualMonth = new Date().getMonth();

    let numberOfYear = actualYear - schoolClassYear;

    if (numberOfYear == 0 || actualMonth >= 8) {
      numberOfYear++;
    }

    return numberOfYear;
  }

}
