import { createReducer } from '@reduxjs/toolkit';
import { logoutAction } from 'store/user/actions';
import { getInspectionParametersAction } from './actions';
import { IInspectionParametersReducer } from './entities';

const initialState: IInspectionParametersReducer = {
  data: null,
  fetching: false,
  error: null
};

export const parametersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInspectionParametersAction.pending, (state) => ({
      ...state,
      fetching: true
    }))
    .addCase(getInspectionParametersAction.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload,
      fetching: false,
      error: null
    }))
    .addCase(getInspectionParametersAction.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      fetching: false
    }))
    .addCase(logoutAction, () => initialState)
    .addDefaultCase((state) => state);
});
