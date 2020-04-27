const groupRepetitiveCharacters = (
  characterGroups: Array<string[]>,
  char: string
): Array<string[]> => {
  const lastGroup = characterGroups.pop() || [];

  if (lastGroup.length === 0 || lastGroup.includes(char)) {
    return [...characterGroups, [...lastGroup, char]];
  } else {
    return [...characterGroups, lastGroup, [char]];
  }
};

const collapseGroupedCharacters = (characterGroup: string[]): string => {
  const char = characterGroup[0];
  return characterGroup.length > 1 ? `${char}${characterGroup.length}` : char;
};

/**
 * Used to collapse repetitive characters in any string.
 *
 * For example, given the string "aaabbccccc" this function will output
 * "a3b2c5".
 *
 * @param {string} str - A string to collapse.
 *
 * @returns The collapsed string value.
 */
export const collapse = (str: string): string =>
  str
    .split('')
    .reduce(groupRepetitiveCharacters, [])
    .map(collapseGroupedCharacters)
    .join('');
