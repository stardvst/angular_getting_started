import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Acme Product Management');
  });
});
