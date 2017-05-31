/**
 * Created by Kevin Clark on 5/26/2017.
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WeekViewComponent} from './calendar-module/week-view/week-view.component';
import {DayViewComponent} from './calendar-module/day-view/day-view.component';

const routes: Routes = [
  { path: 'day',  component: DayViewComponent },
  { path: 'week',  component: WeekViewComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
