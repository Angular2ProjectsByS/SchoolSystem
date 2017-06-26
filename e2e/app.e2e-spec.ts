import { SchoolSystemPage } from './app.po';

describe('school-system App', () => {
  let page: SchoolSystemPage;

  beforeEach(() => {
    page = new SchoolSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
