import { TestBed, async } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarViewsModule } from './calendar-module/calendar.module';
import { ErrorsModule } from './errors/errors.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        CalendarViewsModule,
        ErrorsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Google Calendar Example for Angular 4'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Google Calendar Example for Angular 4');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent.length).toBeGreaterThan(0);
  }));
});
