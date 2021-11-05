import React, { FC } from 'react';

import styles from './index.module.scss';

type TErrorMessage = {
  showError: boolean;
  errorMsg: string;
};

const ErrorMessage: FC<TErrorMessage> = ({ showError, errorMsg }) => {

  return <>{showError && <div className={styles.error}>{errorMsg}</div>}</>;
};

export default ErrorMessage;
