import { TState } from 'store/index';
import {createSelector} from "@reduxjs/toolkit";

const getContractByCar = (state: TState) => state.contracts.contractByCar;

export const getContractByCarDataSelector = createSelector(
    getContractByCar,
    (contract) => contract.data
)

export const getContractByCarLoadingSelector = createSelector(
    getContractByCar,
    (contract) => contract.fetching
)
