import { validDate } from './date';
import moment from 'moment';

describe('check if the date is valid', () => {
  test('with new Date()', () => {
    expect(validDate(new Date())).toBe(true);
  });

  test('with moment()', () => {
    expect(validDate(moment())).toBe(true);
  });
});

describe('check if the date is valid formatted', () => {
  test('with moment().format()', () => {
    expect(validDate(moment().format())).toBe(true);
  });

  test("moment().format('YYYY-MM-DD')", () => {
    expect(validDate(moment().format('YYYY-MM-DD'))).toBe(true);
  });
});

describe('check if the date is not valid formatted', () => {
  test("with moment('2020-02-31')", () => {
    expect(validDate(moment('2020-02-31'))).toBe(false);
  });

  test("new Date('2020-15-31')", () => {
    expect(validDate(new Date('2020-15-31'))).toBe(false);
  });
});
