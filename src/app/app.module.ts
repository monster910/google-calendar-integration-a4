import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarViewsModule } from './calendar-module/calendar.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CalendarViewsModule,
    AppRoutingModule,
    ErrorsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
