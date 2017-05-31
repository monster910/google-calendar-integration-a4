import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GoogleAuthenticationService} from './google-authentication.service';

@Injectable()
export class GoogleCalendarService {

  private googleAuthService;

  constructor(private authService: GoogleAuthenticationService) {
    this.googleAuthService = authService;
  }


  public GetCalendars(): any {
    // this.googleAuthService.initializeCalendarAPI().then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );
    // const request = window['gapi'].client.calendar.calendarList.list();
    // request.execute(function(resp) {
    //   const cals = resp.items;
    //   console.log('Calendars:');
    //
    //   if (cals.length > 0) {
    //     for (let i = 0; i < cals.length; i++) {
    //       console.log(cals[i]);
    //     }
    //   } else {
    //     console.log('No calendars found.');
    //   }
    //
    // });



  }
}
