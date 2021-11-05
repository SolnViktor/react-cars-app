import { TState } from 'store/index';
import {createSelector} from "@reduxjs/toolkit";

const getContracts = (state: TState) => state.contracts.contractsAll;

export const getContractsDataSelector = createSelector(
    getContracts,
    (contracts) => contracts.data
)
export const getCurrentContractSelector = createSelector(
    getContracts,
    (contracts) => contracts.currentContract
)