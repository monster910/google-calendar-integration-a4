import {Component, OnInit} from '@angular/core';
import {GoogleCalendarService} from '../google-calendar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  success: boolean;
  addComplete: boolean;
  addEventError;

  constructor(
    private calendarService: GoogleCalendarService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.success = false;
  }

  createForm() {
    const start = new Date();
    start.setMilliseconds(0);
    start.setSeconds(0);
    start.setMinutes(0);

    const end = new Date();
    end.setTime(start.getTime());
    end.setHours(end.getHours() + 1);
    this.eventForm = this.fb.group({
      summary: [null, Validators.required ],
      location: '',
      description: '',
      startTime: start,
      endTime: end,
      recurrence: 'RRULE:FREQ=DAILY;COUNT=1'

    });
  }

  addEvent(): void {
    this.addComplete = false;
    console.log(this.eventForm.value);

    const event = {
      'summary': this.eventForm.value.summary,
      'location': this.eventForm.value.location,
      'description': this.eventForm.value.description,
      'start': {
        'dateTime': this.eventForm.value.startTime,
        'timeZone': 'America/Chicago'
      },
      'end': {
        'dateTime': this.eventForm.value.endTime,
        'timeZone': 'America/Chicago'
      },
      'recurrence': [
        this.eventForm.value.recurrence
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
    }).then((response) => {
      this.addComplete = true;
      this.success = true;
      this.eventForm.reset();
    }, (error) => {
      this.addComplete = true;
      this.success = false;
      this.addEventError = error.message;
      console.log(error);
    });
  }
}
