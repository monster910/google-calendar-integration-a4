import { Injectable } from '@angular/core';

@Injectable()
export class ErrorManagerService {
  error: Error;

  constructor() { }

  getError(): Error {
    return this.error;
  }

  setError(value: Error) {
    this.error = value;
  }

}
