import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekViewComponent } from './week-view.component';
import {GoogleCalendarService} from '../google-calendar.service';
import {GoogleAuthenticationService} from '../google-authentication.service';

describe('WeekViewComponent', () => {
  let component: WeekViewComponent;
  let fixture: ComponentFixture<WeekViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekViewComponent ],
      providers: [GoogleCalendarService, GoogleAuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
