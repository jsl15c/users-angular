import { JokesServicePage } from './app.po';

describe('jokes-service App', () => {
  let page: JokesServicePage;

  beforeEach(() => {
    page = new JokesServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
