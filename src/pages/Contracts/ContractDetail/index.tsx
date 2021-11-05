import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IContractItem } from 'store/contracts/contractsAll/entities';
import { DetailAuto } from './DetailAuto';
import { DetailClient } from './DetailClient';
import { clearCurrentContractAction } from 'store/contracts/contractsAll/actions';

import styles from './index.scss';
import { CommonButton } from 'common/Button';
import { Paths } from 'enums/routes';

type TContractsDetail = {
  currentContract: IContractItem | null;
};

export const ContractDetailContainer: FC<TContractsDetail> = ({
  currentContract
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (!currentContract) return null;

  const onCloseContract = () => {
    dispatch(clearCurrentContractAction());
  };

  return (
    <div className={styles.contract__detail__container}>
      <DetailAuto
        currentContract={currentContract}
        onCloseContract={onCloseContract}
      />
      <DetailClient currentContract={currentContract} />
      <Link
        to={{
          pathname: `${Paths.INSPECTION}/${currentContract.id}`,
          state: { from: location }
        }}
      >
        <CommonButton className={styles.contract__detail__btn}>
          Начать осмотр
        </CommonButton>
      </Link>
    </div>
  );
};
