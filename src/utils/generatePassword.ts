import { SettingsTypes } from '../components/MainPage/types';
import { LOWERCASE, UPPERCASE, NUMERIC, SYMBOL } from './constants';

export const generatePassword = (options: {
  length: number;
  settings: SettingsTypes[];
}): string => {
  const { length, settings } = options;
  let characters = LOWERCASE;
  if (settings.includes('upperCase')) characters += UPPERCASE;
  if (settings.includes('numbers')) characters += NUMERIC;
  if (settings.includes('symbols')) characters += SYMBOL;

  let password = '';

  // mixing all the characters and generating a string with certain length and random char
  for (let i = 0; i < length; i += 1) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};
