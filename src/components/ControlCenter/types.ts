import { ChangeEvent } from 'react';
import { SettingsTypes } from '../MainPage/types';

export type ControlCenterProps = {
  checkBoxes: SettingsTypes[];
  length: number;
  onChangeCheckbox: (
    type: SettingsTypes
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeLength: (value: number) => void;
};
