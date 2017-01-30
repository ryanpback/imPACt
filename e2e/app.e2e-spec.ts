import { ImPACtPage } from './app.po';

describe('im-pact App', function() {
  let page: ImPACtPage;

  beforeEach(() => {
    page = new ImPACtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
