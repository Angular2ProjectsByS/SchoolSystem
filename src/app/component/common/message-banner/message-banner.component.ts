import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BannerMessageInfo } from '../../../model/view/banner-message-info';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.css']
})
export class MessageBannerComponent implements OnInit, OnChanges {

  display : boolean = false;
  @Input() banerInfo : BannerMessageInfo;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Wykryto zmiany w ErrorBannerComponent");
    if (this.banerInfo) {
      this.display = true;
    }
    else {
      this.display = false;
    }
  }

  private changeStyle() {
    
  }

}
