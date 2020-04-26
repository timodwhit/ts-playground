import {
  isObjectLiteral,
  getBetweenDelimiters,
  findIndex,
  includesAll,
  flatten,
} from './util';
import {ISelector, Delimiters} from './types';

const ArrayAccessDelimiters = [
  Delimiters.StartArrayAccess,
  Delimiters.EndArrayAccess,
];

const parseArrayAccessSegments = (segment: string): string[] =>
  segment.split(/(?=\[)/);

const parseSegment = (segment: string) => {
  const parsed: string[] = [];
  const end: number =
    findIndex(segment, Delimiters.StartArrayAccess) || segment.length;

  parsed.push(segment.slice(0, end));

  return [
    ...parsed,
    ...parseArrayAccessSegments(segment.slice(end, segment.length)),
  ];
};

const parsePathIntoSegments = (path: string): string[] =>
  flatten(path.split(/\./).map(parseSegment)).filter(Boolean);

const createNestedObjectSelector = (key: string): ISelector => ({
  apply: val => (isObjectLiteral(val) ? val[key] : undefined),
});

const createArrayIndexSelector = (idx: number): ISelector => ({
  apply: val => (Array.isArray(val) && idx in val ? val[idx] : undefined),
});

const deriveSelectorFromSegment = (segment: string): ISelector =>
  includesAll(segment, ArrayAccessDelimiters)
    ? createArrayIndexSelector(
        Number(
          getBetweenDelimiters(
            segment,
            Delimiters.StartArrayAccess,
            Delimiters.EndArrayAccess
          )
        )
      )
    : createNestedObjectSelector(segment);

const getSelectors = (path: string): ISelector[] =>
  parsePathIntoSegments(path).map(deriveSelectorFromSegment);

/**
 * Used to retrieve any value from within an object literal.
 *
 * The path selector supports nested objects and array access by index.
 * For example, given the below object, the path "foo.nestedFoo[0]" returns "hello".
 * {
 *   foo: {
 *     nestedFoo: ["hello", "world"],
 *   }
 * }
 *
 * @param obj - Any object literal.
 * @param path - A path string used to select a value from the object.
 *
 * @returns The value found at the provided path, or undefined.
 */
export const get = (obj: Record<string, any>, path: string): any => {
  // Returns provided object for an empty path.
  if (path === '') {
    return obj;
  }

  return getSelectors(path).reduce((val: any, selector: ISelector) => {
    return typeof val !== 'undefined' ? selector.apply(val) : undefined;
  }, obj);
};
