import { ChangeEvent } from 'react';

export type SliderProps = {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
