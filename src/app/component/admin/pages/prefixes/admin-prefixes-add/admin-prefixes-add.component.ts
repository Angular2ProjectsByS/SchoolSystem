import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-prefixes-add',
  templateUrl: './admin-prefixes-add.component.html',
  styleUrls: ['./admin-prefixes-add.component.css']
})
export class AdminPrefixesAddComponent implements OnInit {

  constructor() { }
  private prefixesToSend : Array<string> = ['a', 'b', 'b', 'dfasfadsfadsf', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
  'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
  actualPrefix : string;
  validationMessage : string;

  ngOnInit() {
  }

  addPrefixToSet() {
    let prefixName = this.actualPrefix.trim();

    if (this.checkPrefixName(prefixName)) {
      this.validatePrefix(prefixName);
      this.prefixesToSend.push(prefixName);
      this.actualPrefix = "";
      
      if (this.validationMessage !== "") {
        this.validationMessage = null;
      }
    }
    else {
      this.removeLastSpaceFromPrefix();
    }


  }


  checkPrefixName(name) {
    let isValidName = true;

    if (this.prefixesToSend.indexOf(name) != -1) {
      isValidName = false;
      this.validationMessage = "Prefiks znajduje się już w zbiorze.";
    }
    else if (!this.validatePrefix(name)){
      isValidName = false;
      this.validationMessage = "Nazwa prefiksu posiada nieprawidłowy format.";
    }

    return isValidName;
  }

  private removeLastSpaceFromPrefix() {
    this.actualPrefix = this.actualPrefix.substring(0, this.actualPrefix.length - 1);
  }


  validatePrefix(name) {
    var pattern = /^[a-z]+$/g;
    //console.log(pattern.test(name));
    return pattern.test(name);
  }

  removePrefixFromSet(i) {
    this.prefixesToSend.splice(i, 1);
  }

}
