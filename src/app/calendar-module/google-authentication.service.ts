import {AfterViewInit, Injectable} from '@angular/core';

@Injectable()
export class GoogleAuthenticationService {
  // constants
  static clientId = '978628212480-qoao2rskqn6ceka482rutnncunj4h2j9.apps.googleusercontent.com';
  // static apiKey = 'AIzaSyC_AVRBRTKnnd2C8ZBQxwv708KiCFnYti0';
  static scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

  public isAuthenticated = false;
  loadAPI: Promise<any>

  constructor() {
    // check the authentication
    const self = this;
    window['checkAuth'] = function() {
      self.authenticate(true);
    };
  }

  private authenticate(immediateAuth: boolean) {
    return this.internalAuthentication(immediateAuth)
      .then(() => this.initializeCalendarAPI())
      .then((response: any) => this.authenticated(response))
      .catch((error: any) => { console.log('authentication failed: ' + error); });
  }

  private internalAuthentication(immediateAuth: boolean) {
    return new Promise((resolve, reject) => {
      console.log('authentication - immediate: ' + immediateAuth);
      // window['gapi'].client.setApiKey(GoogleAuthenticationService.apiKey);
      const authorizationRequestData = {
        'client_id': GoogleAuthenticationService.clientId,
        'scope': GoogleAuthenticationService.scopes,
        'immediate': immediateAuth
      };

      window['gapi'].auth.authorize(authorizationRequestData,
        (authData) => {
          if (authData && ! authData.error) {
            this.isAuthenticated = true;
            this.authenticated('');
            resolve();
          } else {
            this.isAuthenticated = false;
            this.authenticated(null);
            reject();
          }
        });

    });
  }

  private authenticated(response: any) {
    console.log('post authentication on: ' + response );
    console.log(window['gapi'].client.calendar);
  }

  private initializeCalendarAPI() {
    return new Promise((resolve, reject) => {
      console.log('initialize Google Calendar API');
      resolve(window['gapi'].client.load('calendar', 'v3'));
    });
  }
}
