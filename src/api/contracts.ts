import Instance from './Instance';
import { Methods } from 'enums/methods';

class Contracts extends Instance {
  public async getContracts() {
    return this.send(Methods.GET, '/api/v1/contracts');
  }
  public async getContractByCar(carId: string) {
    return this.send(Methods.GET, `/api/v1/contracts/by_car/${carId}`);
  }
}

const contracts = new Contracts();

export default contracts;