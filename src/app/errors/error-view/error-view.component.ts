import { Component, OnInit } from '@angular/core';
import {ErrorManagerService} from '../error-manager.service';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.css']
})
export class ErrorViewComponent implements OnInit {

  errorManagerService: ErrorManagerService;

  constructor(errorMgrService: ErrorManagerService) {
    this.errorManagerService = errorMgrService;
  }

  ngOnInit() {
  }

}
