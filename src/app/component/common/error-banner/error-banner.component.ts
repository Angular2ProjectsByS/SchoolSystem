import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit, OnChanges {

  display : boolean = false;
  @Input() message : string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Wykryto zmiany w ErrorBannerComponent");
    if (this.message) {
      this.display == true;
    }
    else {
      this.display == false;
    }
  }

}
