import { OtherPage } from './app.po';

describe('other App', function() {
  let page: OtherPage;

  beforeEach(() => {
    page = new OtherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
