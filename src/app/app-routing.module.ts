/**
 * Created by Kevin Clark on 5/26/2017.
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WeekViewComponent} from './calendar-module/week-view/week-view.component';
import {DayViewComponent} from './calendar-module/day-view/day-view.component';
import {ErrorViewComponent} from './errors/error-view/error-view.component';
import {AddEventComponent} from './calendar-module/add-event/add-event.component';

const routes: Routes = [
  { path: 'day',  component: DayViewComponent },
  { path: 'week',  component: WeekViewComponent },
  { path: 'add',  component: AddEventComponent },
  { path: 'error',  component: ErrorViewComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
