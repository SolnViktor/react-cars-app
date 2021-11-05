export interface IUserReducer {
  token: string | null;
  refreshToken: string | null;
  role: string | null;
  permissions: Array<string> | null;
  loginFetching: boolean;
  initFetching: boolean;
  error: any;
}

export type TLoginRequest = {
  login: string;
  password: string;
};

export type TRefreshTokensRequest = {
  refreshToken: string;
};

export type TSetToken = { token: string; refreshToken: string };
