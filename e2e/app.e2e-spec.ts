import { GithubAccountSearchPage } from './app.po';

describe('github-account-search App', function() {
  let page: GithubAccountSearchPage;

  beforeEach(() => {
    page = new GithubAccountSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
