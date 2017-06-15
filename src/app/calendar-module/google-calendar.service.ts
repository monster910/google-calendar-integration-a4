import {Injectable, NgZone} from '@angular/core';
import { GoogleAuthenticationService } from './google-authentication.service';

@Injectable()
export class GoogleCalendarService {
  static SCOPE = 'https://www.googleapis.com/auth/calendar';
  static DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

  public isSignedIn: boolean;

  private initData;

  constructor(public googleAuthService: GoogleAuthenticationService, private _ngZone: NgZone) {
    this.initData = {
      scope: GoogleCalendarService.SCOPE,
      discoverDocs: GoogleCalendarService.DISCOVERY_DOCS
    };
    this.isSignedIn = true;
    // hack since callbacks from state changes do not have hooks into this object
    window['__googleCalendarService'] = this;
  }

  /**
   * Callback method utilized form the initialization of the API and when the authentication state changes
   *
   * @param signedIn boolean of the signed in state
   */
  private updateSignInStatus(signedIn: any) {
    console.log('updateSignInStatus: ' + signedIn);
    if (signedIn !== null) {
      window['__googleCalendarService']._ngZone.run(() => {
        window['__googleCalendarService'].isSignedIn = signedIn;
      });
    }
  }

  /**
   * Load the API for consumption.
   * @param initData the data to initialize the Google client API
   * @return Promise waiting for load and initialization
   */
  public loadAPI(initData: any) {
    return this.googleAuthService.getClient(initData, this.updateSignInStatus)
      .then((gapi) =>
        new Promise((resolve, reject) => {
          gapi.client.load('calendar', 'v3', () => {
            resolve(gapi.client.calendar);
          });
        }),
        (gapi) =>
          new Promise((resolve, reject) => {
            if (this.updateSignInStatus) {
              this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            } else {
              if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                reject(gapi);
              }
            }
          })
      );
  }

  /**
   * Get calendars
   * @param query json structure to narrow calendar options
   *
   * @see https://developers.google.com/google-apps/calendar/v3/reference/calendarList/list
   */
  public getCalendars(query): any {
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

  /**
   * Get events
   * @param query json structure to narrow events returned
   *
   * @see https://developers.google.com/google-apps/calendar/v3/reference/events/list
   */
  public getEvents(query): any {
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

  /**
   * Add the event
   *
   * @param event the event to add
   *
   * @see https://developers.google.com/google-apps/calendar/v3/reference/events/insert
   */
  public addEvent(event): void {
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
