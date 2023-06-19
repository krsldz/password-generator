import React, { type FC, memo } from 'react';
import Slider from '../../ui/Slider/Slider';
import Dropdown from '../../ui/Dropdown/Dropdown';
import { ControlCenterProps } from './types';

import styles from './ControlCenter.module.css';

const ControlCenter: FC<ControlCenterProps> = ({
  checkBoxes,
  onChangeCheckbox,
  onChangeLength,
  length,
}) => {
  const lengthValues = [6, 8, 10, 12, 14, 16];

  return (
    <div className={styles.wrap}>
      <div className={styles.dropdownWrap}>
        <span className={styles.label}>password length</span>
        <Dropdown length={length} onChange={onChangeLength} values={lengthValues} />
      </div>
      <div>
        <span className={styles.label}>allow uppercase</span>
        <Slider
          isChecked={checkBoxes.includes('upperCase')}
          onChange={onChangeCheckbox('upperCase')}
        />
      </div>
      <div>
        <span className={styles.label}>include numbers</span>
        <Slider
          isChecked={checkBoxes.includes('numbers')}
          onChange={onChangeCheckbox('numbers')}
        />
      </div>
      <div>
        <span className={styles.label}>include symbols</span>
        <Slider
          isChecked={checkBoxes.includes('symbols')}
          onChange={onChangeCheckbox('symbols')}
        />
      </div>
    </div>
  );
};
export default memo(ControlCenter);
