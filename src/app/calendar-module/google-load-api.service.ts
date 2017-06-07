import { Injectable } from '@angular/core';

@Injectable()
export class GoogleLoadApiService {

  // constants
  static URL = 'https://apis.google.com/js/api.js?onload=__onLoaded';

  public static promise;

  public isAuthenticated = false;
  loadAPI: Promise<any>;

  /**
   * Dynamically insert load script and initialize callback
   * @returns {any}
   */
  public static load() {
    // First time 'load' is called?
    if (!GoogleLoadApiService.promise) {

      // Make promise to load
      GoogleLoadApiService.promise = new Promise( resolve => {

        // Set callback for when google maps is loaded.
        window['__onLoaded'] = (ev) => {
          resolve(window['gapi']);
        };

        const node = document.createElement('script');
        node.src = GoogleLoadApiService.URL;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
      });
    }

    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return GoogleLoadApiService.promise;
  }

  constructor() { }

}
