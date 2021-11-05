import React, { ReactChild, ReactChildren } from 'react';
import { CircularProgress } from '@material-ui/core';
import styles from './index.module.scss';

type TLoader = {
  children?: ReactChildren | ReactChild;
  loading: boolean;
};

export const Loader = ({ loading, children }: TLoader) => {
  return (
    <div className={styles.loader__container}>
      {children}
      {loading && (
        <div className={styles.spinner}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
