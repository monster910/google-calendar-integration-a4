import { Injectable } from '@angular/core';
import { GoogleAuthenticationService } from './google-authentication.service';

@Injectable()
export class GoogleCalendarService {

  private googleAuthService;

  constructor(private authService: GoogleAuthenticationService) {
    this.googleAuthService = authService;
  }

  public loadAPI() {
    return this.googleAuthService.loadAPI()
      .then((clientAPI) => {
        return new Promise((resolve, reject) => {
          clientAPI.load('calendar', 'v3', () => {
            resolve(clientAPI.calendar);
          });
        });
      });
  }

  public GetCalendars(query): any {

    this.loadAPI().then((calendar) => {
      console.log(calendar);
      const request = calendar.calendarList.list(query);
      request.execute(function(resp) {
        const cals = resp.items;
        console.log('Calendars:');

        if (cals.length > 0) {
          for (let i = 0; i < cals.length; i++) {
            console.log(cals[i]);
          }
        } else {
          console.log('No calendars found.');
        }

      });

    });
  }

  public GetEvents(query): any {
    this.loadAPI().then((calendar) => {
      console.log(calendar);
      const request = calendar.events.list(query);
      request.execute(function(resp) {
        const events = resp.items;
        for (const event of events) {
          let when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          console.log(event.summary + ' (' + when + ')');
        }
      });
    });
  }

  public AddEvent(event): void {
    this.loadAPI().then((calendar) => {
      const request = calendar.events.insert(event);
      request.execute(function(resp) {
        console.log('event added');
      }, function(error) {
        console.log(error);
      });
    });
  }
}
