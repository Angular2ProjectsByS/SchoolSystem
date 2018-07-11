import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-prefixes-add',
  templateUrl: './admin-prefixes-add.component.html',
  styleUrls: ['./admin-prefixes-add.component.css']
})
export class AdminPrefixesAddComponent implements OnInit {

  constructor() { }
  private prefixesToSend : Array<string> = ['a', 'b'];
  actualPrefix : string;

  ngOnInit() {
  }

  addPrefixToSet() {
    let prefixName = this.actualPrefix.trim();
    console.log("1" + prefixName + "1");
    this.prefixesToSend.push(prefixName);
    this.actualPrefix = "";
  }

}
