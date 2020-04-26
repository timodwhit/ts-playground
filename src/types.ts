export enum Delimiters {
  NestedObject = '.',
  StartArrayAccess = '[',
  EndArrayAccess = ']',
}

// Not my favorite name but it works
export interface ISelector {
  apply: (val: any) => any;
}

// Helpers
export type Maybe<T> = T | undefined;
