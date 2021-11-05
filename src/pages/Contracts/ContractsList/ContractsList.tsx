import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import debounce from 'lodash/debounce';
import { Search } from 'common/Search';
import { IContractItem } from 'store/contracts/contractsAll/entities';
import { ContractCard } from './ContractCard';
import { filterBy, getWordWithEnd } from '../helpers';
import { LeftSideLayout } from 'common/Layout/LeftSideLayout';

import styles from './contractsList.module.scss';

type TContractsList = {
  contracts: Array<IContractItem>;
  currentContract: IContractItem | null;
  onSelectContract: (arg: IContractItem) => void;
};

const keysForSearch = [
  'client.clientName',
  'car.make',
  'car.model',
  'creditAgreementNumber',
  'car.vin',
  'car.licensePlate'
];

export const ContractsList: FC<TContractsList> = React.memo(
  ({ contracts, onSelectContract, currentContract }) => {
    const [filteredContracts, setFilteredContracts] = useState(contracts);

    useEffect(() => {
      setFilteredContracts(contracts);
    }, [contracts]);

    const searchContracts = (value: string) => {
      if (value) {
        value = value.toLowerCase().trim();
        const newContracts = contracts.filter(filterBy(value, keysForSearch));
        setFilteredContracts(newContracts);
        return;
      }
      setFilteredContracts(contracts);
    };
    const debouncedSearch = debounce(searchContracts, 200);

    return (
      <LeftSideLayout>
        <>
          <Search placeholder="Введите данные" onChange={debouncedSearch} />
          <div className={styles.count}>
            Найдено: {filteredContracts.length}{' '}
            {getWordWithEnd('контракт', filteredContracts.length)}
          </div>
          {filteredContracts.map((el) => (
            <ContractCard
              key={el.id}
              contract={el}
              currentContract={currentContract}
              onSelectContract={onSelectContract}
            />
          ))}
        </>
      </LeftSideLayout>
    );
  }
);
