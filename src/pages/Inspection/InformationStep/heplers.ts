import { IContractItem } from 'store/contracts/contractsAll/entities';
import {
  TInspectionParameter,
  TParameterValue
} from 'store/inspection/parameters/entities';

export type TBlock = {
  id: string;
  fieldName: string;
  name: string;
  values: Array<TParameterValue>;
  initialValue?: string | number;
};
type TGetBlocksArray = (
  parameters: Array<TInspectionParameter> | null,
  fieldNames: Array<string>,
  paramsIndexes: Array<number>
) => Array<TBlock>;

export const getFieldsArray: TGetBlocksArray = (
  parameters,
  fieldNames,
  paramsIndexes
) => {
  if(!parameters) return []
  if (fieldNames.length !== paramsIndexes.length) {
    throw new Error(
      "fieldNames arr length doesn't match paramsIndexes arr length"
    );
  }
  return fieldNames.map((fieldName, idx) => ({
    fieldName,
    ...parameters[paramsIndexes[idx]],
  }));
};

export const getInformationKHDFields = (contract: IContractItem | null): Array<TBlock> => [
  {
    id: '1',
    fieldName: 'make',
    name: 'Марка',
    values: [],
    initialValue: contract?.car.make
  },
  {
    id: '2',
    fieldName: 'model',
    name: 'Модель',
    values: [],
    initialValue: contract?.car.model
  },
  {
    id: '3',
    fieldName: 'manufactureYear',
    name: 'Год выпуска',
    values: [],
    initialValue: contract?.car.manufactureYear
  },
  {
    id: '4',
    fieldName: 'enginePower',
    name: 'Л/С',
    values: [],
    initialValue: contract?.car.enginePower
  },
  {
    id: '5',
    fieldName: 'color',
    name: 'Цвет',
    values: [],
    initialValue: contract?.car.color
  },
  {
    id: '6',
    fieldName: 'licensePlate',
    name: 'Гос. номер',
    values: [],
    initialValue: contract?.car.licensePlate
  },
  {
    id: '7',
    fieldName: 'vin',
    name: 'VIN',
    values: [],
    initialValue: contract?.car.vin
  }
];
