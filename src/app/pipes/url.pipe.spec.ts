import { UrlPipe } from './url.pipe';

describe('UrlPipe', () => {
  it('create an instance', () => {
    const url = 'https://www.asml.com/en';
    const pipe = new UrlPipe(this.url);
    expect(pipe).toBeTruthy();
  });
});
