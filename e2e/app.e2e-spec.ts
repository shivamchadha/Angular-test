import { AngularTestLibPage } from './app.po';

describe('angular-test-lib App', function() {
  let page: AngularTestLibPage;

  beforeEach(() => {
    page = new AngularTestLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
