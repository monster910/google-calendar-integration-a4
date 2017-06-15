# GoogleCalendarTimesheetsA4

This project demonstrates the use of the Google Calendar API using Angular4. Before you can use the project
you must obtain a clientID from Google. Go to google and provision an API to use google calendars.

https://console.developers.google.com/apis/dashboard

I created OAuth 2.0 client IDs for credentials. 
1. Choose Web application
2. Pick a name
3. Add http://localhost:4200 as one origin (later you can add http://localhost:8080 for docker executions)


It has the following within the project

### CalendarModule
The module containing a week view and a daily view. The daily view UI has some rudimentary form to allow
you to add an event to a calendar.

#### GoogleLoadApiService
This service loads the Google API and is a promise based system that other Google service wrappers can use

#### GoogleAuthenticationService
This service handles authenticating the Google API. It uses the GoogleLoadService

#### GoogleCalendarService
This service handles interactions with Calendar API. It uses GoogleAuthententicationService which uses
the GoogleLoadApiService.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.5. 

To install angular-cli, `npm install -g angular-cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Build using Docker

`docker build -t google-calendar-timesheets-a4 .`

## Running in Docker

`docker run --rm -t -e ENV="prod" -p 8080:4200 google-calendar-timesheets-a4`

and open the follow in a browser

`<vm ip address | vm URL>:8080` or `localhost:8080`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
