import {Injectable} from '@angular/core';

@Injectable()
export class ValidationService {

    protected validate(word, pattern) {
        if (word === undefined) { return false; }
        return pattern.test(word);
    }



    show() {
      alert('work');
    }

}
