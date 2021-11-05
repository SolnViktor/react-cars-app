import React, { FC } from 'react';
import classnames from 'classnames';
import { IContractItem } from 'store/contracts/contractsAll/entities';

import styles from './contractCard.module.scss';

type TContractCard = {
  contract: IContractItem;
  currentContract: IContractItem | null;
  onSelectContract: (arg: IContractItem) => void;
};

export const ContractCard: FC<TContractCard> = ({
  contract,
  currentContract,
  onSelectContract
}) => {
  const isActive = contract.id === currentContract?.id
  return (
    <div
      className={classnames(styles.contractCard__container, {
        [styles.contract__active]: isActive
      })}
      onClick={() => onSelectContract(contract)}
    >
      <div>
        <div className={styles.title}>
          {contract.car.make} {contract.car.model}
        </div>
        <div>
          <span className={styles.licensePlate}>
            {contract.car.licensePlate}
          </span>
          <span>VIN: {contract.car.vin}</span>
        </div>
        <div>{contract.client.clientName}</div>
      </div>
      <div>
        <div>{contract.creditAgreementNumber}</div>
        <div>{contract.creditAgreementStatus}</div>
      </div>
    </div>
  );
};
