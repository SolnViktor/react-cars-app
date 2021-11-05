import { IContractItem } from '../contractsAll/entities';

export interface IContractByCarReducer {
  data: IContractItem | null;
  fetching: boolean;
  error: any;
}
export type TContractByCarRequest = {
  carId: string
}