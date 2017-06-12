/**
 * Created by Kevin Clark on 6/12/2017.
 */

import {ErrorHandler, Injectable, Injector} from '@angular/core';
import { Router } from '@angular/router';
import {ErrorManagerService} from './error-manager.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  router: Router;
  errorManagerService: ErrorManagerService;

  constructor(private injector: Injector, errorMgrService: ErrorManagerService) {
    this.router = this.injector.get(Router);
    this.errorManagerService = errorMgrService;
  }

  handleError(error) {
    if (!this.router) {
      this.router = this.injector.get(Router);
    }
    this.errorManagerService.setError(error);
    this.router.navigate(['error']);
    throw error;
  }
}
