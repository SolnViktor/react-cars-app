import { createReducer } from '@reduxjs/toolkit';
import {
  loginAction,
  logoutAction,
  refreshTokensAction,
  setTokensAction
} from './actions';
import { IUserReducer } from './entities';

const initialState: IUserReducer = {
  token: null,
  refreshToken: null,
  role: null,
  permissions: null,
  loginFetching: false,
  initFetching: false,
  error: null
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction.pending, (state) => ({
      ...state,
      loginFetching: true
    }))
    .addCase(loginAction.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      loginFetching: false
    }))
    .addCase(loginAction.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      loginFetching: false
    }))
    .addCase(refreshTokensAction.pending, (state) => ({
      ...state,
      initFetching: true
    }))
    .addCase(refreshTokensAction.fulfilled, (state, { payload }) => ({
      ...state,
      ...payload,
      initFetching: false
    }))
    .addCase(setTokensAction, (state, { payload }) => ({
      ...state,
      ...payload
    }))
    .addCase(logoutAction, () => initialState)
    .addDefaultCase((state) => state);
});
