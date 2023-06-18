import { ChangeEvent } from 'react';
import { CheckboxTypes } from '../MainPage/types';

export type ControlCenterProps = {
  checkBoxes: CheckboxTypes;
  length: number;
  onChangeCheckbox: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeLength: (value: number) => void;
};
