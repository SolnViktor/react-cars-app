import { createReducer } from '@reduxjs/toolkit';
import {
  clearCurrentContractAction,
  getContractsAction,
  setCurrentContractAction
} from './actions';
import { IContractsReducer } from './entities';
import { logoutAction } from '../../user/actions';

const initialState: IContractsReducer = {
  data: [],
  currentContract: null,
  fetching: false,
  error: null
};

export const contractsAllReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getContractsAction.pending, (state) => ({
      ...state,
      fetching: true
    }))
    .addCase(getContractsAction.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
      fetching: false,
      error: null
    }))
    .addCase(getContractsAction.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      fetching: false
    }))
    .addCase(setCurrentContractAction, (state, { payload }) => ({
      ...state,
      currentContract: payload
    }))
    .addCase(clearCurrentContractAction, (state) => ({
      ...state,
      currentContract: null
    }))
    .addCase(logoutAction, () => initialState)
    .addDefaultCase((state) => state);
});
