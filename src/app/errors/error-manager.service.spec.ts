import { TestBed, inject } from '@angular/core/testing';

import { ErrorManagerService } from './error-manager.service';

describe('ErrorManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorManagerService]
    });
  });

  it('should be created', inject([ErrorManagerService], (service: ErrorManagerService) => {
    expect(service).toBeTruthy();
  }));
});
