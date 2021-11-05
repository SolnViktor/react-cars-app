import React, { FC } from 'react';
import { IContractItem } from 'store/contracts/contractsAll/entities';
import avatar from 'images/avatar.jpg';
import { DetailClientItem } from './DetailClientItem';

import styles from './detailClient.module.scss';

type TDetailClient = {
  currentContract: IContractItem | null;
};

export const DetailClient: FC<TDetailClient> = ({ currentContract }) => {
  const clientInfoBlocks = [
    {
      title: 'Заемщик',
      description: currentContract?.client.clientName
    },
    {
      title: 'Адрес регистрации',
      description: currentContract?.client.clientAddress
    },
  ]
  const contractInfoBlocks = [
    {
      title: 'Номер кредитного договора',
      description: currentContract?.creditAgreementNumber
    },
    {
      title: 'Сумма долга',
      description: currentContract?.totalDebt
    },
    {
      title: 'Статус кредитного договора',
      description: currentContract?.creditAgreementStatus
    },
    {
      title: 'Подстатус кредитного договора',
      description: currentContract?.creditAgreementSubStatus
    }
  ];
  return (
    <div className={styles.detail__client}>
      <div className={styles.client__info__container}>
        <div className={styles.avatar__wrap}>
          <img src={avatar} alt="Фото пользователя" />
        </div>
        <div className={styles.client__info}>
          {clientInfoBlocks.map((el, idx) => (
              <DetailClientItem
                  key={idx}
                  title={el.title}
                  description={el.description}
              />
          ))}
        </div>
      </div>
      <div className={styles.contract__info}>
        {contractInfoBlocks.map((el, idx) => (
          <DetailClientItem
            key={idx}
            title={el.title}
            description={el.description}
            className={styles.contract__info__item}
          />
        ))}
      </div>
    </div>
  );
};
