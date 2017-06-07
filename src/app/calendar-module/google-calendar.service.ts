import { Injectable } from '@angular/core';
import { GoogleAuthenticationService } from './google-authentication.service';

@Injectable()
export class GoogleCalendarService {
  static SCOPE = 'https://www.googleapis.com/auth/calendar';
  static DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

  private googleAuthService;
  private initData;

  constructor(private authService: GoogleAuthenticationService) {
    this.googleAuthService = authService;
    this.initData = {
      scope: GoogleCalendarService.SCOPE,
      discoverDocs: GoogleCalendarService.DISCOVERY_DOCS
    };
  }

  public loadAPI(initData: any) {
    return this.googleAuthService.getClient(initData)
      .then((clientAPI) =>
        new Promise((resolve, reject) => {
          clientAPI.load('calendar', 'v3', () => {
            resolve(clientAPI.calendar);
          });
        })
      );
  }

  public GetCalendars(query): any {
    this.loadAPI(this.initData).then((calendar) => {
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
    this.loadAPI(this.initData).then((calendar) => {
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
    this.loadAPI(this.initData).then((calendar) => {
      const request = calendar.events.insert(event);
      request.execute(function(resp) {
        console.log('event added');
      }, function(error) {
        console.log(error);
      });
    });
  }
}
