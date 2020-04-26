import {fn} from '../../src';

describe('Test suite for our playground', () => {
  test('placeholder', () => {
    expect(fn()).toEqual('hello world');
  });
});
