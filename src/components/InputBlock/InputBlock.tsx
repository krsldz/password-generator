import React, { type FC, memo } from 'react';
import cls from 'classnames';
import copyIcon from '../../images/icons8-save-all-80.png';
import generateIcon from '../../images/icons8-available-updates-80.png';
import styles from './InputBlock.module.css';

const InputBlock: FC<{
  onCopy: () => void;
  onClick: () => void;
  value: string;
  isCopied: boolean;
}> = ({ onCopy, onClick, value, isCopied }) => (
  <div className={styles.wrap}>
    <input
      className={cls(styles.input, { [styles.inputActive]: isCopied })}
      readOnly
      value={value}
    />
    <button className={styles.btn} onClick={onCopy} type="button">
      <img alt="copy" src={copyIcon} />
    </button>
    <button className={styles.btn} onClick={onClick} type="button">
      <img alt="generate" src={generateIcon} />
    </button>
  </div>
);

export default memo(InputBlock);
