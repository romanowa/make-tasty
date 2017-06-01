import { MakeTastyPage } from './app.po';

describe('make-tasty App', () => {
  let page: MakeTastyPage;

  beforeEach(() => {
    page = new MakeTastyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
