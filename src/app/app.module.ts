import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarViewsModule } from './calendar-module/calendar.module';
import { ErrorViewComponent } from './errors/error-view/error-view.component';
import {GlobalErrorHandler} from './errors/error-handler';
import {ErrorManagerService} from './errors/error-manager.service';
import {ErrorsModule} from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarViewsModule,
    AppRoutingModule,
    ErrorsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
