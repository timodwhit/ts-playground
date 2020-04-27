import {collapse} from '../index';

describe('Test suite for collapse()', () => {
  test.each([
    ['abc', 'abc'],
    ['aaabbccccc', 'a3b2c5'],
    ['hello', 'hel2o'],
    ['aaaaaabcd', 'a6bcd'],
    ['abbbbbcd', 'ab5cd'],
    ['abcdddddddddd', 'abcd10'],
    ['aa1122333b', 'a2122233b'],
    ['aabcaaa', 'a2bca3'],
  ])(
    'Given an input of %p, collapse returns the string %p',
    (str: string, expected: string) => {
      expect(collapse(str)).toEqual(expected);
    }
  );
});
