import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorViewComponent} from './error-view/error-view.component';
import {ErrorManagerService} from './error-manager.service';
import {GlobalErrorHandler} from './error-handler';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ErrorViewComponent ],
  exports: [ ErrorViewComponent, CommonModule ],
  providers: [ ErrorManagerService, {provide: ErrorHandler, useClass: GlobalErrorHandler}],
})
export class ErrorsModule { }
