import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContractsAction,
  setCurrentContractAction
} from 'store/contracts/contractsAll/actions';
import { ContractsList } from './ContractsList/ContractsList';
import { ContractDetailContainer } from './ContractDetail';
import {
  getContractsDataSelector,
  getCurrentContractSelector
} from 'store/contracts/contractsAll/selectors';
import { IContractItem } from 'store/contracts/contractsAll/entities';

import styles from './index.scss';

export const ContractsContainer: FC = () => {
  const dispatch = useDispatch();
  const contracts = useSelector(getContractsDataSelector);
  const currentContract = useSelector(getCurrentContractSelector);

  useEffect(() => {
    if (!contracts.length) {
      dispatch(getContractsAction());
    }
  }, []);

  const onSelectContract = useCallback((contract: IContractItem) => {
    dispatch(setCurrentContractAction(contract));
  }, []);

  return (
    <div className={styles.contracts__container}>
      <ContractsList
        contracts={contracts}
        currentContract={currentContract}
        onSelectContract={onSelectContract}
      />
      <ContractDetailContainer currentContract={currentContract} />
    </div>
  );
};
