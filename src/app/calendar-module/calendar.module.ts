import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WeekViewComponent } from './week-view/week-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { GoogleLoadApiService } from './google-load-api.service';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GoogleCalendarService } from './google-calendar.service';
import { AddEventComponent } from './add-event/add-event.component';

import { AlertModule, DatepickerModule, TimepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    AlertModule.forRoot(), DatepickerModule.forRoot(), TimepickerModule.forRoot(), BsDropdownModule.forRoot(),
    DateValueAccessorModule ],
  declarations: [ WeekViewComponent, DayViewComponent, AddEventComponent ],
  exports: [ WeekViewComponent, DayViewComponent, CommonModule ],
  providers: [ GoogleLoadApiService, GoogleAuthenticationService, GoogleCalendarService ]
})
export class CalendarViewsModule { }
