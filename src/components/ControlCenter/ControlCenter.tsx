import React, { type FC, memo, ChangeEvent } from 'react';
import { CheckboxTypes } from '../MainPage/types';
import styles from './ControlCenter.module.css';

const ControlCenter: FC<{
  checkBoxes: CheckboxTypes;
  length: number;
  onChangeCheckbox: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeLength: (value: number) => void;
}> = ({ checkBoxes, onChangeCheckbox, onChangeLength, length }) => {
  const { symbols, numbers, upperCase } = checkBoxes;

  return (
    <div className={styles.wrap}>
      <div className={styles.dropdownWrap}>
        <span className={styles.label}>length</span>
        <li className={styles.hovWrap}>
          {length}
          <ul className={styles.main}>
            <li>
              <div onClick={() => onChangeLength(6)}>6</div>
            </li>
            <li>
              <div onClick={() => onChangeLength(8)}>8</div>
            </li>
            <li>
              <div onClick={() => onChangeLength(10)}>10</div>
            </li>
            <li>
              <div onClick={() => onChangeLength(12)}>12</div>
            </li>
          </ul>
        </li>
      </div>
      <div>
        <span className={styles.label}>allow uppercase</span>
        <label className={styles.switch}>
          <input
            checked={upperCase}
            onChange={onChangeCheckbox('upperCase')}
            type="checkbox"
          />
          <span className={styles.slider} />
        </label>
      </div>
      <div>
        <span className={styles.label}>include 0-9</span>
        <label className={styles.switch}>
          <input
            checked={numbers}
            onChange={onChangeCheckbox('numbers')}
            type="checkbox"
          />
          <span className={styles.slider} />
        </label>
      </div>
      <div>
        <span className={styles.label}>include symbols</span>
        <label className={styles.switch}>
          <input
            checked={symbols}
            onChange={onChangeCheckbox('symbols')}
            type="checkbox"
          />
          <span className={styles.slider} />
        </label>
      </div>
    </div>
  );
};
export default memo(ControlCenter);
