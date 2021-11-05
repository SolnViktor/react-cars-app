import { Methods } from 'enums/methods';
import Instance from './Instance';

class Auth extends Instance {
  public async login(payload: any) {
    return this.send(Methods.POST, '/api/v1/tokens', payload);
  }

  public async refreshTokens(payload: any) {
    return this.send(Methods.PUT, '/api/v1/tokens', payload);
  }
}

const auth = new Auth();

export default auth;
