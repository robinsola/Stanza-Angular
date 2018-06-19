import { StanzaAppPage } from './app.po';

describe('stanza-app App', () => {
  let page: StanzaAppPage;

  beforeEach(() => {
    page = new StanzaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
