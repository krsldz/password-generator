import React, { type FC, memo } from 'react';
import styles from './ControlCenter.module.css';

const ControlCenter: FC = () => {
  const link = () => console.info('hi');

  return (
    <div className={styles.wrap}>
      <div className={styles.dropdownWrap}>
        <span className={styles.label}>length</span>
        <li className={styles.hovWrap}>
          6
          <ul className={styles.main}>
            <li>6</li>
            <li>8</li>
            <li>10</li>
            <li>12</li>
          </ul>
        </li>
      </div>
      <div>
        <span className={styles.label}>allow uppercase</span>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider} />
        </label>
      </div>
      <div>
        <span className={styles.label}>include 0-9</span>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider} />
        </label>
      </div>
      <div>
        <span className={styles.label}>include symbols</span>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider} />
        </label>
      </div>
    </div>
  );
};
export default memo(ControlCenter);
