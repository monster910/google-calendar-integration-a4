import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Google Calendar Example for Angular 4';

  constructor() {
    console.log(environment);
  }

  ngOnInit() {
    if (environment.clientID === 'Enter your client ID') {
      throw new Error('You must enter a clientID in the environments/environment.ts file');
    }
  }

}
