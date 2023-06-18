import React, { type FC, memo } from 'react';
import cls from 'classnames';
import copyIcon from '../../images/copyIcon.png';
import generateIcon from '../../images/generateIcon.png';
import { InputBlockProps } from './types';

import styles from './InputBlock.module.css';

const InputBlock: FC<InputBlockProps> = ({ onCopy, onClick, value, isCopied }) => (
  <div className={styles.wrap}>
    <input
      className={cls(styles.input, { [styles.inputActive]: isCopied })}
      readOnly
      value={value}
    />
    <div className={styles.btnBlock}>
      <button className={styles.btn} onClick={onCopy} type="button">
        <img alt="copy" src={copyIcon} />
      </button>
      <button className={styles.btn} onClick={onClick} type="button">
        <img alt="generate" src={generateIcon} />
      </button>
    </div>
  </div>
);

export default memo(InputBlock);
