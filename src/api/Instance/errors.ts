export type TNetworkError = {
  status?: number;
  message?: string;
  type?: string;
};

export class NetworkError {
  readonly status: number | undefined;
  readonly message: string;
  readonly type: string;

  constructor({ message = '', status, type= '' }: TNetworkError) {
    this.status = status;
    this.message = message;
    this.type = type;
  }
}