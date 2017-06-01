import {AfterViewInit, Injectable} from '@angular/core';
import {GoogleLoadApiService} from './google-load-api.service';

@Injectable()
export class GoogleAuthenticationService {
  // constants
  static clientId = '978628212480-qoao2rskqn6ceka482rutnncunj4h2j9.apps.googleusercontent.com';
  // static apiKey = 'AIzaSyC_AVRBRTKnnd2C8ZBQxwv708KiCFnYti0';
  static scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

  public isAuthenticated = false;


  constructor() {
    // check the authentication
    // this.authenticate(true);
  }

  public loadAPI() {
    if (window['gapi'] && window['gapi'].client) {
      return new Promise((resolve, reject) => {
        resolve(window['gapi'].client);
      });
    } else {
      return this.authenticate(true);
    }
  }

  private authenticate(immediateAuth: boolean) {
    return new Promise((resolve, reject) => {
      GoogleLoadApiService.load()
        .then((gapi) => this.internalAuthentication(immediateAuth))
        .then((authenticated) => {
          this.authenticated(authenticated);
          resolve(window['gapi'].client);
        })
        .catch((error: any) => {
          console.log('authentication failed: ' + error);
          reject(error);
        });

    });
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
            resolve(this.isAuthenticated);
          } else {
            this.isAuthenticated = false;
            reject(this.isAuthenticated);
          }
        });

    });
  }

  private authenticated(isAuthenitcated: boolean) {
    console.log('post authentication status: ' + isAuthenitcated );
    console.log(window['gapi'].client);
  }

}
