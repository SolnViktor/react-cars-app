import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import contracts from 'api/contracts';
import { IContractItem } from './entities';

const GET_CONTRACTS = '@contracts/GET_CONTRACTS';

export const getContractsAction = createAsyncThunk(
  GET_CONTRACTS,
  async (payload, { rejectWithValue }) => {
    try {
      return await contracts.getContracts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const SET_CURRENT_CONTRACT = '@contracts/SET_CURRENT_CONTRACT';

export const setCurrentContractAction =
  createAction<IContractItem>(SET_CURRENT_CONTRACT);

const CLEAR_CURRENT_CONTRACT = '@contracts/CLEAR_CURRENT_CONTRACT';

export const clearCurrentContractAction = createAction(CLEAR_CURRENT_CONTRACT);
