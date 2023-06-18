import { generatePassword } from '../generatePassword';

const data = {
  length: 8,
  numbers: true,
  symbols: false,
  upperCase: true,
};

describe('utils generatePassword', () => {
  it('generated password length matches length in data', () => {
    expect(generatePassword(data)).toHaveLength(data.length);
  });
});
