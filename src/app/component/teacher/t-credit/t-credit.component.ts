import { Component, OnInit } from '@angular/core';
import {RestService} from '@app/service/global/request/rest-service.service';
import {Constants} from '@app/constants/constants';
import { YearToNumberPipe } from '@app/component/admin/school-class/main/school-class-list/pipe/year-to-number.pipe';

declare var $: any;

@Component({
  selector: 'app-t-credit',
  templateUrl: './t-credit.component.html',
  styleUrls: ['./t-credit.component.css'],
  providers: [YearToNumberPipe]
})
export class TCreditComponent implements OnInit {

  credits: any = [];
  calTitles: any = [];

  constructor(private restService: RestService, private yearToNumber: YearToNumberPipe) { }

  async ngOnInit() {
    await this.getCredits();
    this.parseCalTitles();
    this.initCalendar();
  }

  async getCredits() {
    const url = Constants.SERVER_PROXY + '/credit/get?teacherId=' + localStorage.getItem(Constants.UserId);
    const response = await this.restService.get(url);
    this.credits = response.result;
    console.log(response);
  }

  parseCalTitles() {
    console.log('parse dates');
    for (const credit of this.credits) {
      console.log(credit);
      console.log(credit.event_date);
      const entry = {
        'title':  this.yearToNumber.transform(credit.occupationalGroup.schoolClass.startDate) +
          credit.occupationalGroup.schoolClass.prefix.name + ' - '
          +  credit.creditType.name + ' - ' + credit.name,
        'start': credit.event_date.toString()
      };
      this.calTitles.push(entry);
    }
    console.log(this.calTitles);
  }

  initCalendar() {
    $(document).ready(this.addEventsCal(this.calTitles));
  }

  addEventsCal(events) {
    return function() {
      console.log(events);
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'listDay,listWeek,month'
        },
        views: {
          listDay: { buttonText: 'Dzień' },
          listWeek: { buttonText: 'Tydzień' }
        },
        defaultView: 'listWeek',
        // defaultDate: '2019-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        locale: 'pl',
        events: events
      });
    }
  }

}
