import React, { type FC, memo, useState, useCallback, FormEvent } from 'react';
import copy from 'copy-to-clipboard';
import ControlCenter from '../ControlCenter/ControlCenter';
import InputBlock from '../InputBlock/InputBlock';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleCopy = useCallback((): void => {
    copy(inputValue, {
      format: 'text/plain',
    });
  }, [inputValue]);

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.headerWrap}>
          <span className={styles.mainTitle}>Keep it safe</span>
          <span className={styles.subTitle}>password generator</span>
        </h1>
        <InputBlock onCopy={handleCopy} value={inputValue} />
        <ControlCenter />
      </div>
    </div>
  );
};
export default memo(MainPage);
