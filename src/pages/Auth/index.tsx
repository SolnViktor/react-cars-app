import React, { FC } from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthForm from './AuthForm';
import {
  getTokenSelector,
  userLoginLoadingSelector
} from 'store/user/selectors';
import { Paths } from 'enums/routes';

import styles from './index.module.scss';
import { Loader } from 'common/Loader';

type LocationState = {
  from: string | undefined;
}

export const Auth: FC = () => {
  const token = useSelector(getTokenSelector);
  const isLoading = useSelector(userLoginLoadingSelector);
  const { state } = useLocation<LocationState | undefined>();

  if (token) {
    return <Redirect to={state?.from || Paths.CONTRACTS} />;
  }

  return (
    <Loader loading={isLoading}>
      <main className={styles.auth__container}>
        <div className={styles.img} />
        <AuthForm />
      </main>
    </Loader>
  );
};
