export enum MagicConchEvents {
  NO = 'no',
  YES = 'yes',
}

export interface IMagicConch {
  ask: (question: any) => void;
}
