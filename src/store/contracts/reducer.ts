import { combineReducers } from '@reduxjs/toolkit';
import {contractsAllReducer} from "./contractsAll/reducer";
import {contractsByCarReducer} from "./contractByCar/reducer";

export const contractsReducer = combineReducers({
  contractsAll: contractsAllReducer,
  contractByCar: contractsByCarReducer
});
