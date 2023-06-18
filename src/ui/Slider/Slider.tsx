import React, { type FC, memo } from 'react';
import { SliderProps } from './types';

import styles from './Slider.module.css';

const Slider: FC<SliderProps> = ({ onChange, isChecked }) => (
  <label className={styles.switch}>
    <input checked={isChecked} onChange={onChange} type="checkbox" />
    <span className={styles.slider} />
  </label>
);

export default memo(Slider);
