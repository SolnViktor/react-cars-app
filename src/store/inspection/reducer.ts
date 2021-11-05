import { combineReducers } from '@reduxjs/toolkit';
import {parametersReducer} from "./parameters/reducer";

export const inspectionReducer = combineReducers({
  parameters: parametersReducer,
})