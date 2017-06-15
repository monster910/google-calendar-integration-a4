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
    this.calendarService.getCalendars({});
    this.calendarService.getEvents(
      { calendarId: 'primary',
        timeMin: (new Date()).toISOString()
      });
  }

  showValue() {
    console.log(this.calendarService.isSignedIn);
    console.log(this.calendarService.isSignedIn === window['__googleCalendarService'].isSignedIn);
  }
}
