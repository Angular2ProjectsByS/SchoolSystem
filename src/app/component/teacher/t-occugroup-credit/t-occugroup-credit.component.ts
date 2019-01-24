import {Component, OnInit} from '@angular/core';
import {RestService} from '@app/service/global/request/rest-service.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Constants} from '@app/constants/constants';
declare var $: any;

@Component({
  selector: 'app-t-occugroup-credit',
  templateUrl: './t-occugroup-credit.component.html',
  styleUrls: ['./t-occugroup-credit.component.css']
})
export class TOccugroupCreditComponent implements OnInit {

  credits: any = [];
  occuGroup: any = {};

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.occuGroup = JSON.parse(params['occuGroup']);
    });
    await this.getCredits();
  }

  async getDetails(url) {
    const res = await this.restService.get<any>(url);
    console.log(res);
    console.log(res.result[0]);
    return res.result;
  }

  async addNewCreditForOccuGroup() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'occuGroup': JSON.stringify(this.occuGroup)
      }
    };

    this.router.navigate(['teacher/occup-group/credit/add'],  navigationExtras);
  }

  async getCredits() {
    const url = Constants.SERVER_PROXY + '/credit/get?teacherId='
      + localStorage.getItem(Constants.UserId) + '&occuGroupId=' + this.occuGroup.id;

    const response = await this.restService.get(url);
    this.credits = response.result;
    console.log(response);
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
        // defaultDate: '2019-01-12',
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
