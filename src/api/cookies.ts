import Cookies from 'js-cookie';

type TSetToken = (token: string) => void;

export const getTokenCookie = () => {
  return Cookies.get('token') || '';
};

export const setTokenCookie: TSetToken = (token) => {
  return Cookies.set('token', token, { expires: 30 });
};

export const removeTokenCookie = () => {
  Cookies.remove('token');
};

export const getRefreshTokenCookie = () => {
  return Cookies.get('refreshToken') || '';
};

export const setRefreshTokenCookie: TSetToken = (token) => {
  return Cookies.set('refreshToken', token, { expires: 30 });
};

export const removeRefreshTokenCookie = () => {
  Cookies.remove('refreshToken');
};
