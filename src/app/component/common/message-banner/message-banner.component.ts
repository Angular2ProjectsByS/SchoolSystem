import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.css']
})
export class MessageBannerComponent implements OnInit, OnChanges {

  display : boolean = false;
  @Input() message : string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Wykryto zmiany w ErrorBannerComponent");
    if (this.message) {
      this.display = true;
    }
    else {
      this.display = false;
    }
  }

}
