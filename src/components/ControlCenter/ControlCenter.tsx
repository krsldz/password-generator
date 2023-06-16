import React, { type FC, memo } from 'react';
import styles from './ControlCenter.module.css';

const ControlCenter: FC = () => {
  const link = () => console.info('hi');

  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.label}>length</span>
        <input type="checkbox" />
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
