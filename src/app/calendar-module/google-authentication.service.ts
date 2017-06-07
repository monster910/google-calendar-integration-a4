import {AfterViewInit, Injectable} from '@angular/core';
import {GoogleLoadApiService} from './google-load-api.service';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleAuthenticationService {
  // constants
  static clientId = environment.clientID;

  public static loadClientPromise;

  public isAuthenticated = false;

  constructor() {
    console.log(GoogleAuthenticationService.clientId);
  }

  private loadClient(gapi: any) {
    if (GoogleAuthenticationService.loadClientPromise) {
      return GoogleAuthenticationService.loadClientPromise;
    }
    GoogleAuthenticationService.loadClientPromise =  new Promise((resolve, reject) => {
      gapi.load('client:auth2', function() {
        resolve(gapi);
      });
    });
    return GoogleAuthenticationService.loadClientPromise;
  }

  private initClient(gapi: any, initData: any, updateSigninStatus: any) {
    return new Promise((resolve, reject) => {
      initData.clientId = GoogleAuthenticationService.clientId;
      gapi.client.init(initData)
        .then(function() {
          // call on state changes
          if (updateSigninStatus) {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          }
          // handle initial signin state and return the loaded client
          resolve(gapi.client);
        });
    });
  }

  public getClient(initData: any, updateSigninStatus: any) {
    return GoogleLoadApiService.load()
      .then((gapi) => this.loadClient(gapi))
      .then((gapi) => this.initClient(gapi, initData, updateSigninStatus));
  }
}
