import {get} from '../index';

describe('Test suite for get()', () => {
  const simpleObj = {
    a: 'foo',
    b: 'bar',
    c: 'baz',
  };

  const nestedObj = {
    a: {b: {c: {d: 'hello world'}}},
  };

  const simpleArrayObj = {
    a: ['foo', 'bar', 'baz'],
  };

  const nestedArrayObj = {
    a: [[[['hello world']]]],
  };

  const complexObj = {
    a: [{foo: [1, 2]}, {bar: [3, 4]}],
    b: {foo: [{c: 1}], bar: [{d: 2}]},
  };

  test.each([
    ['Nonexistent top-level path returns undefined', simpleObj, 'bad'],
    ['Nonexistent nested path returns undefined', nestedObj, 'bad.path.here'],
    [
      'Nonexistent nested path that has a partial existent path returns undefined',
      nestedObj,
      'a.b.c.bad',
    ],
    [
      'Nonexistent top-level array index returns undefined',
      simpleArrayObj,
      `a[${simpleArrayObj.a.length}]`,
    ],
    [
      'Using array accessor on primitive prop value returns undefined',
      simpleObj,
      'a[0]',
    ],
    [
      'Using array accessor on object prop value returns undefined',
      nestedObj,
      'a[0]',
    ],
    ['Using array accessor as root path returns undefined', simpleObj, '[0]]'],
  ])('%p', (desc, obj, path) => {
    expect(get(obj, path)).toBeUndefined();
  });

  test('Empty path returns passed in obj arg', () => {
    expect(get(simpleObj, '')).toEqual(simpleObj);
  });

  test('An existing root-level property path returns the value', () => {
    expect(get(simpleObj, 'a')).toEqual(simpleObj.a);
    expect(get(nestedObj, 'a')).toEqual(nestedObj.a);
    expect(get(simpleArrayObj, 'a')).toEqual(simpleArrayObj.a);
  });

  test('An existing nested property path returns the nested value', () => {
    expect(get(nestedObj, 'a.b')).toEqual(nestedObj.a.b);
    expect(get(nestedObj, 'a.b.c')).toEqual(nestedObj.a.b.c);
    expect(get(nestedObj, 'a.b.c.d')).toEqual(nestedObj.a.b.c.d);
  });

  test('An existing root-level array property path can be indexed to return a specific value', () => {
    expect(get(simpleArrayObj, 'a[0]')).toEqual(simpleArrayObj.a[0]);
    expect(get(nestedObj, 'a[1]')).toEqual(nestedArrayObj.a[1]);
    expect(get(nestedObj, 'a[2]')).toEqual(nestedArrayObj.a[2]);
  });

  test('An existing nested array property path can be indexed to return a specific value', () => {
    expect(get(nestedArrayObj, 'a[0][0]')).toEqual(nestedArrayObj.a[0][0]);
    expect(get(nestedArrayObj, 'a[0][0][0]')).toEqual(
      nestedArrayObj.a[0][0][0]
    );
    expect(get(nestedArrayObj, 'a[0][0][0][0]')).toEqual(
      nestedArrayObj.a[0][0][0][0]
    );
  });

  test('Complex get queries can be used to access any value within an object', () => {
    expect(get(complexObj, 'a[0].foo')).toEqual(complexObj.a[0].foo);
    // @ts-ignore
    expect(get(complexObj, 'a[1].bar[1]')).toEqual(complexObj.a[1].bar[1]);
    expect(get(complexObj, 'b.foo[0]')).toEqual(complexObj.b.foo[0]);
    expect(get(complexObj, 'b.bar[0].d')).toEqual(complexObj.b.bar[0].d);
  });
});
