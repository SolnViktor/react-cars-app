import { createReducer } from '@reduxjs/toolkit';
import {getContractByCarAction} from './actions';
import { IContractByCarReducer } from './entities';
import { logoutAction } from '../../user/actions';

const initialState: IContractByCarReducer = {
  data: null,
  fetching: false,
  error: null
};

export const contractsByCarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getContractByCarAction.pending, (state) => ({
      ...state,
      fetching: true
    }))
    .addCase(getContractByCarAction.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
      fetching: false,
      error: null
    }))
    .addCase(getContractByCarAction.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      fetching: false
    }))
    .addCase(logoutAction, () => initialState)
    .addDefaultCase((state) => state);
});
