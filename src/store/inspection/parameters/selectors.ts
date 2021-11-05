import { TState } from 'store/index';
import {createSelector} from "@reduxjs/toolkit";

const getContractByCar = (state: TState) => state.inspection.parameters;

export const getParametersDataSelector = createSelector(
    getContractByCar,
    (parameters) => parameters.data
)

export const getParametersLoadingSelector = createSelector(
    getContractByCar,
    (parameters) => parameters.fetching
)
