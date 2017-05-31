import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GoogleCalendarService} from '../google-calendar.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit, AfterViewInit {

  private calendarService: GoogleCalendarService;

  constructor(private aCalendarService: GoogleCalendarService) {
    console.log('hello');
    this.calendarService = aCalendarService;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('here');
    this.calendarService.GetCalendars();
  }

}
