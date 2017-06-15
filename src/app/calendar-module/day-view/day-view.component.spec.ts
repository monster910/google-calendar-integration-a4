import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewComponent } from './day-view.component';
import { GoogleCalendarService } from '../google-calendar.service';
import { GoogleAuthenticationService } from '../google-authentication.service';

describe('DayViewComponent', () => {
  let component: DayViewComponent;
  let fixture: ComponentFixture<DayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayViewComponent ],
      providers: [GoogleCalendarService, GoogleAuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
