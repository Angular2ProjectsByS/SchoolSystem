import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/constants/constants';
import {RestService} from '@app/service/global/request/rest-service.service';
declare var $: any;

@Component({
  selector: 'app-t-org-group',
  templateUrl: './t-org-group.component.html',
  styleUrls: ['./t-org-group.component.css']
})
export class TOrgGroupComponent implements OnInit {

  occuGroups;
  constructor(private restService: RestService) {}

  async ngOnInit() {
    this.initCalendar();
    await this.getOcuGroupForTeacher();
  }

  async getOcuGroupForTeacher() {
    const teacherId = localStorage.getItem(Constants.UserId);
    const url = Constants.SERVER_PROXY + '/occupational-group/get?teacher-id=' + teacherId;
    const response = await this.restService.get<any>(url);
    if (response.responseCode !== 200) {
      alert('Bark możliwości załadaowania grup zajęciowych');
    } else {
      this.occuGroups = response.result;
      console.log(this.occuGroups);
    }
  }

  initCalendar() {


    $(document).ready(function() {

      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'listDay,listWeek,month'
        },

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
          listDay: { buttonText: 'list day' },
          listWeek: { buttonText: 'list week' }
        },

        defaultView: 'listWeek',
        defaultDate: '2019-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        locale: 'pl',
        events: [
          {
            title: 'All Day Event',
            start: '2019-01-01'
          },
          {
            title: 'Long Event',
            start: '2019-01-07',
            end: '2019-01-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2019-01-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2019-01-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2019-01-11',
            end: '2019-01-13'
          },
          {
            title: 'Meeting',
            start: '2019-01-12T10:30:00',
            end: '2019-01-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2019-01-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2019-01-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2019-01-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2019-01-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2019-01-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-01-28'
          }
        ]
      });

    });


  }

}