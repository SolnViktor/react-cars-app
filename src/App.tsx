import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageNotFound from 'pages/PageNotFound';
import { Paths } from 'enums/routes';
import { Auth } from 'pages/Auth';
import { PrivateRoute } from 'common/PrivateRoute';
import { getRefreshTokenCookie, getTokenCookie } from 'api/cookies';
import { setTokensAction } from 'store/user/actions';
import { layoutPages } from './pages';

const refreshToken = getRefreshTokenCookie();
const token = getTokenCookie();

const App: FC = () => {
  const dispatch = useDispatch();
  // const a: {a: number} = 'dfgdfg'
  useEffect(() => {
    if (token && refreshToken) {
      dispatch(setTokensAction({ token, refreshToken }));
    }
  }, []);

  return (
    <Switch>
      <Route exact path={Paths.AUTHORIZATION} render={() => <Auth />} />
      {layoutPages.map((props, idx) => (
        <PrivateRoute key={idx} {...props} />
      ))}
      <Route path="*" render={() => <PageNotFound />} />
    </Switch>
  );
};

export { App };
