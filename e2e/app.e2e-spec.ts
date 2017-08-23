import { NgComponentesPage } from './app.po';

describe('ng-componentes App', () => {
  let page: NgComponentesPage;

  beforeEach(() => {
    page = new NgComponentesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
