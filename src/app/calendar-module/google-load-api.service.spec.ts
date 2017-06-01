import { TestBed, inject } from '@angular/core/testing';

import { GoogleLoadApiService } from './google-load-api.service';

describe('GoogleLoadApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleLoadApiService]
    });
  });

  it('should be created', inject([GoogleLoadApiService], (service: GoogleLoadApiService) => {
    expect(service).toBeTruthy();
  }));
});
