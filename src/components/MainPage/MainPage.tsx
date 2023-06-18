import React, { type FC, memo, useState, useCallback, ChangeEvent } from 'react';
import copy from 'copy-to-clipboard';
import ControlCenter from '../ControlCenter/ControlCenter';
import InputBlock from '../InputBlock/InputBlock';
import { generatePassword } from '../../utils/generatePassword';
import { CheckboxTypes } from './types';
import { CheckboxDefaultValues } from './constants';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [checkboxesValues, setCheckboxesValues] =
    useState<CheckboxTypes>(CheckboxDefaultValues);
  const [length, setLength] = useState<number>(8);
  const [copied, setCopied] = useState<boolean>(false);

  const handleChangePassword = useCallback(() => {
    const { upperCase, numbers, symbols } = checkboxesValues;
    const result = generatePassword({ length, numbers, symbols, upperCase });
    setInputValue(result);
  }, [checkboxesValues, length, inputValue]);

  const handleCopy = useCallback((): void => {
    if (!inputValue.length) return;
    copy(inputValue, {
      format: 'text/plain',
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [inputValue]);

  const handleChangeCheckbox = useCallback(
    (type: string) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        setCheckboxesValues({ ...checkboxesValues, [type]: event.target.checked });
      },
    [checkboxesValues]
  );

  const handleChangeLength = useCallback(
    (value: number): void => {
      setLength(value);
    },
    [length]
  );

  return (
    <div className={styles.wrap}>
      <h1 className={styles.headerWrap}>
        <span className={styles.mainTitle}>Keep it safe</span>
        <span className={styles.subTitle}>password generator</span>
      </h1>
      <InputBlock
        isCopied={copied}
        onClick={handleChangePassword}
        onCopy={handleCopy}
        value={inputValue}
      />
      <ControlCenter
        checkBoxes={checkboxesValues}
        length={length}
        onChangeCheckbox={handleChangeCheckbox}
        onChangeLength={handleChangeLength}
      />
    </div>
  );
};
export default memo(MainPage);
