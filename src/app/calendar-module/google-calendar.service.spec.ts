import { TestBed, inject } from '@angular/core/testing';

import { GoogleCalendarService } from './google-calendar.service';
import { GoogleAuthenticationService } from '../auth-module/google-authentication.service';

describe('GoogleCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleCalendarService, GoogleAuthenticationService]
    });
  });

  it('should be created', inject([GoogleCalendarService], (service: GoogleCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
