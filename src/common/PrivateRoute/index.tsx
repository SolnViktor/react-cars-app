import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Paths } from 'enums/routes';
import { getTokenSelector } from 'store/user/selectors';
import Layout from "../Layout";

export const PrivateRoute = ({ component: Component, ...props }: any) => {
  const token = useSelector(getTokenSelector);

  return (
    <Layout>
      <Route
        {...props}
        render={(routeRenderProps) =>
          token ? (
            <Component {...routeRenderProps} />
          ) : (
            <Redirect
              to={{
                pathname: Paths.AUTHORIZATION,
                state: { from: routeRenderProps.location }
              }}
            />
          )
        }
      />
    </Layout>
  );
};
