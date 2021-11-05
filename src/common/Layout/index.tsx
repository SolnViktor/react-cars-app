import React, { FC, ReactChild } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import { logoutAction } from 'store/user/actions';

import styles from './index.module.scss';
import { removeRefreshTokenCookie, removeTokenCookie } from '../../api/cookies';

type TLayout = {
  children: ReactChild | ReactChild[];
};

const Layout: FC<TLayout> = ({ children }) => {
  const dispatch = useDispatch();

  const onExitHandler = () => {
    removeTokenCookie();
    removeRefreshTokenCookie();
    dispatch(logoutAction());
  };

  return (
    <div className={styles.main__layout}>
      <NavBar onExitHandler={onExitHandler} />
      {children}
    </div>
  );
};

export default Layout;
