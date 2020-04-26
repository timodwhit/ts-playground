import {
  findIndex,
  flatten,
  getBetweenDelimiters,
  includesAll,
  isObjectLiteral,
} from '../../src/util';

describe('Test suite for isObjectLiteral function', () => {
  test.each([
    [1, false],
    ['foo', false],
    [true, false],
    [false, false],
    [undefined, false],
    [null, false],
    [NaN, false],
    [Number(3), false],
    [new Date(), false],
    [{}, true],
    [{a: 1, b: 2}, true],
  ])('Given %p, isObjectLiteral returns %p', (arg, expected) => {
    expect(isObjectLiteral(arg)).toEqual(expected);
  });
});

describe('Test suite for includesAll function', () => {
  test.each([
    ['hello world', ['hello world'], true],
    ['hello world', ['hello'], true],
    ['hello world', ['world'], true],
    ['hello world', ['ello', 'worl'], true],
    ['hello world', ['he', 'l', 'wor', ' '], true],
    ['hello world', ['bad'], false],
    ['hello world', ['hello  '], false],
    ['hello world', ['hello', 'bad'], false],
    ['hello world', ['hello', 'world', 'nope'], false],
  ])(
    'Given the string %p and substrings %p, includesAll returns %p',
    (str, subStrs, expected) => {
      expect(includesAll(str, subStrs)).toEqual(expected);
    }
  );
});

describe('Test suite for flatten function', () => {
  test.each([
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [
        [1, 2],
        [3, 4],
      ],
      [1, 2, 3, 4],
    ],
    [
      [[1, [2]], 3, 4, [5, 6]],
      [1, 2, 3, 4, 5, 6],
    ],
  ])('Given %p, flatten() returns %p', (arg, expected) => {
    expect(flatten(arg)).toEqual(expected);
  });
});

describe('Test suite for findIndex function', () => {
  test.each([
    ['hello world', 'hello', 0],
    ['hello world', 'world', 6],
    ['hello world', 'l', 2],
    ['hello world', 'hellot', undefined],
    ['hello world', '  ', undefined],
  ])(
    'Given the string %p and search term %p, findIndex returns %p',
    (str, search, expected) => {
      expect(findIndex(str, search)).toEqual(expected);
    }
  );
});

describe('Test suite for getBetweenDelimiters function', () => {
  test.each([
    ['hello world', 'h', 'd', 'ello worl'],
    ['hello world', 'l', 'o', 'l'],
    ['[TEST]', '[', ']', 'TEST'],
    ['{{TEST}}', '{{', '}}', 'TEST'],
    ['foo{{TEST}}bar', '{{', '}}', 'TEST'],
    ['[TEST]', '[', '--', undefined],
    ['[TEST]', '--', ']', undefined],
    ['[TEST]', ']', '[', undefined],
    ['[TEST]', '++', '--', undefined],
    ['[TEST]', '[', '[', undefined],
  ])(
    'Given the string %p and delimiters %p and %p, getBetweenDelimiters returns %p',
    (str, delim1, delim2, expected) => {
      expect(getBetweenDelimiters(str, delim1, delim2)).toEqual(expected);
    }
  );
});
