import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store';

const getUser = (state: TState) => state.user;

export const getTokenSelector = createSelector(getUser, (user) => user.token);

export const userLoginLoadingSelector = createSelector(
  getUser,
  (user) => user.loginFetching
);

export const initUserLoadingSelector = createSelector(
  getUser,
  (user) => user.initFetching
);
