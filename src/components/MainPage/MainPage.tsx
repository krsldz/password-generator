import React, {
  type FC,
  memo,
  useState,
  useCallback,
  ChangeEvent,
  useEffect,
} from 'react';
import copy from 'copy-to-clipboard';
import ControlCenter from '../ControlCenter/ControlCenter';
import InputBlock from '../InputBlock/InputBlock';
import { generatePassword } from '../../utils/generatePassword';
import { searchInStorage } from '../../utils/searchInStorage';
import { writeToStorage } from '../../utils/writeToStorage';
import { SettingsTypes } from './types';
import { SettingsDefaultValues } from './constants';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [settings, setSettings] = useState<SettingsTypes[]>(SettingsDefaultValues);
  const [length, setLength] = useState<number>(8);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const storageDataLength = searchInStorage('length');
    if (storageDataLength) {
      setLength(storageDataLength as number);
    } else {
      writeToStorage('length', 8);
    }
  }, []);

  useEffect(() => {
    const storageData = searchInStorage('settings');
    if (storageData) {
      setSettings(storageData as SettingsTypes[]);
    } else {
      writeToStorage('settings', SettingsDefaultValues);
    }
  }, []);

  const handleChangePassword = useCallback(() => {
    const result = generatePassword({ length, settings });
    setInputValue(result);
  }, [settings, length, inputValue]);

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
    (type: SettingsTypes) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        const returnValue = settings.includes(type)
          ? settings.filter((val) => val !== type)
          : [...settings, type];
        setSettings(returnValue);
        writeToStorage('settings', returnValue);
      },
    [settings]
  );

  const handleChangeLength = useCallback(
    (value: number): void => {
      setLength(value);
      writeToStorage('length', value);
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
        checkBoxes={settings}
        length={length}
        onChangeCheckbox={handleChangeCheckbox}
        onChangeLength={handleChangeLength}
      />
    </div>
  );
};
export default memo(MainPage);
