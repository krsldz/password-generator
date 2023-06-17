import React, { type FC, memo } from 'react';
import copyIcon from '../../images/icons8-save-all-80.png';
import generateIcon from '../../images/icons8-available-updates-80.png';
import styles from './InputBlock.module.css';

const InputBlock: FC<{
  onCopy: () => void;
  onClick: () => void;
  value: string;
}> = ({ onCopy, onClick, value }) => (
  <div className={styles.wrap}>
    <input className={styles.input} readOnly value={value} />
    <button className={styles.btn} onClick={onCopy} type="button">
      <img alt="copy" src={copyIcon} />
    </button>
    <button className={styles.btn} onClick={onClick} type="button">
      <img alt="generate" src={generateIcon} />
    </button>
  </div>
);

export default memo(InputBlock);
