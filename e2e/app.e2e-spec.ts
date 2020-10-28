import { WeatherPage } from './app.po';

describe('weather App', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  });

  it('should display title saying Weather App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Weather App');
  });
});
