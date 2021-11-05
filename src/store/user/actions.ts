import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TLoginRequest, TRefreshTokensRequest, TSetToken } from './entities';
import { showNotificationAction } from 'store/notification/actions';
import { setRefreshTokenCookie, setTokenCookie } from 'api/cookies';
import auth from 'api/auth';

const LOGIN = '@user/LOGIN';

export const loginAction = createAsyncThunk(
  LOGIN,
  async (payload: TLoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const data = await auth.login(payload);
      setTokenCookie(data.token);
      setRefreshTokenCookie(data.refreshToken);
      return data;
    } catch (error) {
      dispatch(
        showNotificationAction({
          message: 'Проверьте правильность введенных Вами данных.'
        })
      );
      return rejectWithValue(error);
    }
  }
);

const REFRESH_TOKENS = '@user/REFRESH_TOKENS';

export const refreshTokensAction = createAsyncThunk(
    REFRESH_TOKENS,
  async (payload: TRefreshTokensRequest, { dispatch }) => {
    try {
      const data = await auth.refreshTokens(payload);
      setTokenCookie(data.token);
      setRefreshTokenCookie(data.refreshToken);
      return data;
    } catch (error) {
      dispatch(logoutAction());
    }
  }
);

const SET_TOKENS = '@user/SET_TOKENS';

export const setTokensAction = createAction<TSetToken>(SET_TOKENS);

const LOGOUT = '@user/LOGOUT';

export const logoutAction = createAction(LOGOUT);
