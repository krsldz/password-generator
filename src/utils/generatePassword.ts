import { LOWERCASE, UPPERCASE, NUMERIC, SYMBOL } from './constants';

export const generatePassword = (options: {
  length: number;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
}): string => {
  const { length, upperCase, numbers, symbols } = options;
  let characters = LOWERCASE;
  if (upperCase) characters += UPPERCASE;
  if (numbers) characters += NUMERIC;
  if (symbols) characters += SYMBOL;

  let password = '';

  // mixing all the characters and generating a string with certain length and random char
  for (let i = 0; i < length; i += 1) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};
