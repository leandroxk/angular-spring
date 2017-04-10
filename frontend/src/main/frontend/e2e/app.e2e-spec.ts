import { AngularSpringPage } from './app.po';

describe('angular-spring App', () => {
  let page: AngularSpringPage;

  beforeEach(() => {
    page = new AngularSpringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
