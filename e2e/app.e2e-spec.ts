import { GoogleCalendarTimesheetsA4Page } from './app.po';

describe('google-calendar-timesheets-a4 App', () => {
  let page: GoogleCalendarTimesheetsA4Page;

  beforeEach(() => {
    page = new GoogleCalendarTimesheetsA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
