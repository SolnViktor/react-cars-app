export interface IInspectionParametersReducer {
  data: Array<TInspectionParameter> | null;
  fetching: boolean;
  error: any;
}
export type TInspectionParameter = {
  id: string,
  name:string,
  values: Array<TParameterValue>
}

export type TParameterValue = {
  id: string,
  name: string,
  textRequired: boolean,
  textVisible: boolean
}