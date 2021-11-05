import { createAsyncThunk } from '@reduxjs/toolkit';
import inspection from "api/inspection";

const GET_INSPECTION_PARAMETERS = '@inspection/GET_INSPECTION_PARAMETERS';

export const getInspectionParametersAction = createAsyncThunk(
    GET_INSPECTION_PARAMETERS,
  async (payload, { rejectWithValue }) => {
    try {
      return await inspection.getParameters();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
