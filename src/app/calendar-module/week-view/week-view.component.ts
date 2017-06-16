import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GoogleCalendarService} from '../google-calendar.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit, AfterViewInit {

  calendarService: GoogleCalendarService;

  constructor(private aCalendarService: GoogleCalendarService) {
    this.calendarService = aCalendarService;
  }

  /**
   * Example of placing method on a component to handle authorization which may be useful for trapping
   * issues that might occur on signin - user dismisses login popup or reject sharing
   */
  handleAuthClick() {
    this.calendarService.googleAuthService.signIn().then(
      function(request) {
      console.log(request);
    }, function(error) {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('After View Init');
    this.calendarService.getCalendars({}).then(
      (response) => {
        const cals = response.items;
        console.log('Calendars:');

        if (cals.length > 0) {
          for (let i = 0; i < cals.length; i++) {
            console.log(cals[i]);
          }
        } else {
          console.log('No calendars found.');
        }
      }
    );


    this.calendarService.getEvents(
      { calendarId: 'primary',
        timeMin: (new Date()).toISOString()
      }).then( (response) => {
        const events = response.items;
        for (const event of events) {
          let when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          console.log(event.summary + ' (' + when + ')');
        }
    });
  }

  showValue() {
    console.log(this.calendarService.isSignedIn);
    console.log(this.calendarService.isSignedIn === window['__googleCalendarService'].isSignedIn);
  }
}
