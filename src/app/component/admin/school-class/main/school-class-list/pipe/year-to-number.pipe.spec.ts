import { YearToNumberPipe } from './year-to-number.pipe';

describe('YearToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new YearToNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
