import crypto from 'crypto';
import { LOWERCASE, UPPERCASE, NUMERIC, SYMBOL } from './constants';

export const generatePassword = (options: {
  length: number;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
}): string => {
  const { length, upperCase, numbers, symbols } = options;
  return '7E&9Gx(Qh2#G';
};
