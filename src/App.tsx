import React, { FC } from 'react';
import MainPage from './components/MainPage/MainPage';

import styles from './App.module.css';

const App: FC = () => (
  <div className={styles.app}>
    <MainPage />
  </div>
);

export default App;
