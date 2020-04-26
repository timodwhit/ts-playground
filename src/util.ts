import {Maybe} from './types';

export const isObjectLiteral = (val: any): boolean =>
  val === Object(val) && val.constructor === {}.constructor;

export const includesAll = (str: string, subStrs: string[]): boolean =>
  subStrs.every(s => str.includes(s));

export const flatten = (arr: any[]): any[] =>
  arr.reduce(
    (flattened, val) =>
      flattened.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );

export const findIndex = (str: string, search: string): Maybe<number> => {
  const idx = str.indexOf(search);
  return idx >= 0 ? idx : undefined;
};

export const getBetweenDelimiters = (
  val: string,
  delimiter1: string,
  delimiter2: string
): Maybe<string> => {
  return includesAll(val, [delimiter1, delimiter2]) &&
    val.indexOf(delimiter1) < val.indexOf(delimiter2)
    ? val.slice(
        val.indexOf(delimiter1) + delimiter1.length,
        val.indexOf(delimiter2)
      )
    : undefined;
};
