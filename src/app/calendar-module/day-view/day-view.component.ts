import { Component, OnInit } from '@angular/core';
import {GoogleCalendarService} from '../google-calendar.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  constructor(private calendarService: GoogleCalendarService) {
  }

  ngOnInit() {
  }

  addEvent(): void {


    const start = new Date();
    console.log(start.toISOString());
    console.log(start.getTimezoneOffset() / 60);
    const end = new Date();
    end.setTime(start.getTime() + (1 * 60 * 60 * 1000));
    const event = {
      'summary': 'My New Appointment',
      'location': 'Yonkers, NY 10705',
      'description': 'A chance to hear more about developer.',
      'start': {
        'dateTime': '2017-06-06T15:00:00',
        'timeZone': 'America/Chicago'
      },
      'end': {
        'dateTime': '2017-06-06T16:00:00',
        'timeZone': 'America/Chicago'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=1'
      ],
      'attendees': [
        {'email': 'kevin@example.com'},
        {'email': 'clark@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }
    };

    this.calendarService.addEvent({
      calendarId: 'primary',
      resource: event
    });
  }
}
