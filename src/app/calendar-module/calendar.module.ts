import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './week-view/week-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GoogleCalendarService } from './google-calendar.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ WeekViewComponent, DayViewComponent ],
  exports: [ WeekViewComponent, DayViewComponent, CommonModule ],
  providers: [ GoogleAuthenticationService, GoogleCalendarService ]
})
export class CalendarViewsModule { }
