import React, { type FC, memo } from 'react';
import styles from './InputBlock.module.css';

const InputBlock: FC<{
  onCopy: () => void;
  value: string;
}> = ({ onCopy, value }) => {
  const link = () => console.info('hi');

  return (
    <div className={styles.wrap}>
      <input readOnly value={value} />
      <button onClick={onCopy} type="button">
        copy
      </button>
      <button>generate</button>
    </div>
  );
};
export default memo(InputBlock);
