import React, { FC } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { IContractItem } from 'store/contracts/contractsAll/entities';
import { CommonButton } from 'common/Button';
import { ButtonTypes } from 'common/Button/types';

import styles from './detailAuto.module.scss';

type TDetailAuto = {
  currentContract: IContractItem | null;
  onCloseContract: () => void;
};

export const DetailAuto: FC<TDetailAuto> = ({
  currentContract,
  onCloseContract
}) => {
  const infoBlocks = [
    {
      title: 'Год',
      description: currentContract?.car.manufactureYear
    },
    {
      title: 'Л/С',
      description: currentContract?.car.enginePower
    },
    {
      title: 'Цвет',
      description: currentContract?.car.enginePower
    },
    {
      title: 'Гос. номер',
      description: currentContract?.car.licensePlate
    },
    {
      title: 'VIN',
      description: currentContract?.car.vin
    }
  ];
  return (
    <div className={styles.detail__auto}>
      <div className={styles.header}>
        <div className={styles.title}>
          {currentContract?.car.make} {currentContract?.car.model}
        </div>
        <CancelIcon className={styles.close__icon} onClick={onCloseContract} />
      </div>
      <div className={styles.footer}>
        <div className={styles.info__container}>
          {infoBlocks.map((el, idx) => (
            <div key={idx} className={styles.info__block}>
              <div className={styles.info__title}>{el.title}</div>
              <div>{el.description}</div>
            </div>
          ))}
        </div>
        <CommonButton
          type={ButtonTypes.Secondary}
          className={styles.detail____auto__btn}
        >
          Документы
        </CommonButton>
      </div>
    </div>
  );
};
