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

}
