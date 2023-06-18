import React, { type FC, memo } from 'react';
import { DropdownProps } from './types';

import styles from './Dropdown.module.css';

const Dropdown: FC<DropdownProps> = ({ onChange, values, length }) => (
  <li className={styles.hovWrap}>
    {length}
    <ul className={styles.list}>
      {values.map((value) => (
        <li>
          <div onClick={() => onChange(value)}>{value}</div>
        </li>
      ))}
    </ul>
  </li>
);
export default memo(Dropdown);
