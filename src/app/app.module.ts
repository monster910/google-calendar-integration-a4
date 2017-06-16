import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleAuthModule } from './auth-module/google-auth.module';
import { CalendarModule } from './calendar-module/calendar.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GoogleAuthModule,
    CalendarModule,
    AppRoutingModule,
    ErrorsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
