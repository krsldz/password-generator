import React, { type FC, memo } from 'react';
import ControlCenter from '../ControlCenter/ControlCenter';
import InputBlock from '../InputBlock/InputBlock';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
  const link = () => console.info('hi');

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.headerWrap}>
          <span className={styles.mainTitle}>Keep it safe</span>
          <span className={styles.subTitle}>password generator</span>
        </h1>
        <InputBlock />
        <ControlCenter />
      </div>
    </div>
  );
};
export default memo(MainPage);
