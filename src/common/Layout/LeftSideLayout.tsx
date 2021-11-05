import React, { ReactChild } from 'react';

import styles from './leftSideLayout.module.scss';

type TLeftSideLayout = {
  children: ReactChild | ReactChild[];
};

export const LeftSideLayout = ({ children }: TLeftSideLayout) => {
  return <div className={styles.left__side__layout}>{children}</div>;
};