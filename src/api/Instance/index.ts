import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { NetworkError, TNetworkError } from './errors';
import { getRefreshTokenCookie, getTokenCookie } from '../cookies';
import { logoutAction, refreshTokensAction } from 'store/user/actions';
import { store } from 'store';
import { Methods } from 'enums/methods';

class Instance {
  instance: AxiosInstance;
  methods: any;

  constructor(timeout = 10000) {
    this.instance = axios.create({
      timeout,
      headers: {
        Authorization: `Bearer `
      }
    });

    this.methods = new Map([
      ['get', this.instance.get],
      ['post', this.instance.post],
      ['put', this.instance.put],
      ['delete', this.instance.delete]
    ]);

    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = getTokenCookie();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const status = error.response?.status;
        const config = error.response?.config;
        const data = error.response?.data;

        const errObj = {
          message: data?.message || '',
          status,
          type: data?.type || ''
        };
        if (
          status === 401 &&
          data.type === 'tokenExpiredException' &&
          config?.url !== '/api/v1/tokens'
        ) {
          return this.refresh(error, errObj);
        }
        if (status === 401 && data.type === 'authTokenNotFoundException') {
          store.dispatch(logoutAction());
          throw new NetworkError(errObj);
        }
        if (status === 403) {
          store.dispatch(logoutAction());
          throw new NetworkError(errObj);
        }
        throw new NetworkError(errObj);
      }
    );
  }

  private async refresh(
    error: AxiosError,
    errObj: TNetworkError
  ): Promise<any> {
    const refreshToken = getRefreshTokenCookie();
    const { payload } = await store.dispatch(
      refreshTokensAction({ refreshToken })
    );
    if (payload.token) {
      error.config.headers.Authorization = `Bearer ${payload.token}`;
      return await this.instance.request(error.config);
    }
    throw new NetworkError(errObj);
  }

  public async send(methodName: Methods, ...args: any[]): Promise<any> {
    const method = this.methods.get(methodName);
    const { data } = await method(...args);
    return data;
  }
}

export default Instance;
