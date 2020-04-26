export enum Delimiters {
  NestedObject = '.',
  StartArrayAccess = '[',
  EndArrayAccess = ']',
}

export interface ISelector {
  apply: (val: any) => any;
}
