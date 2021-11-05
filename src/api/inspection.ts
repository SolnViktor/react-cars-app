import Instance from './Instance';
import { Methods } from 'enums/methods';

class Inspection extends Instance {
  public async getParameters() {
    return this.send(Methods.GET, '/api/v1/inspection/parameters');
  }
}

const inspection = new Inspection();

export default inspection;