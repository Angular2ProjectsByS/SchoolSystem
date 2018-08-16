import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BannerMessageInfo } from '@app/model/view/banner-message-info';
declare var $: any;

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
    if (this.banerInfo) {
      this.display = true;
      this.changeStyle();
    }
    else {
      this.display = false;
    }
  }

  private changeStyle() {
    $("#message-content").removeClass(function(index, className) {
      return (className.match(/(^|\s)alert-\S+/g) || []).join(' ');
    });

    $("#message-content").addClass(this.banerInfo.alertStyle);
  }

}
