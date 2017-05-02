import { FinalTmPage } from './app.po';

describe('final-tm App', () => {
  let page: FinalTmPage;

  beforeEach(() => {
    page = new FinalTmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
