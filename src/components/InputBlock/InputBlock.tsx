import React, { type FC, memo } from 'react';
import styles from './InputBlock.module.css';

const InputBlock: FC = () => {
  const link = () => console.info('hi');

  return (
    <div className={styles.wrap}>
      <input />
      <button>copy</button>
      <button>generate</button>
    </div>
  );
};
export default memo(InputBlock);
