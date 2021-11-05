import { createAsyncThunk } from '@reduxjs/toolkit';
import contracts from 'api/contracts';
import {TContractByCarRequest} from "./entities";

const GET_CONTRACTS_BY_CAR = '@contracts/GET_CONTRACTS_BY_CAR';

export const getContractByCarAction = createAsyncThunk(
    GET_CONTRACTS_BY_CAR,
  async (payload: TContractByCarRequest, { rejectWithValue }) => {
    try {
      return await contracts.getContractByCar(payload.carId);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
