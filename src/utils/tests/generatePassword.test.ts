import { SettingsTypes } from '../../components/MainPage/types';
import { generatePassword } from '../generatePassword';

const data = {
  length: 8,
  settings: ['upperCase', 'numbers'] as SettingsTypes[],
};

describe('utils generatePassword', () => {
  it('generated password length matches length in data', () => {
    expect(generatePassword(data)).toHaveLength(data.length);
  });
});
