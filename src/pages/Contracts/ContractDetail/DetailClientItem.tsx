import React, { FC } from 'react';

import styles from './detailClientItem.module.scss';

type TDetailClientItem = {
  title: string;
  description?: string | number;
  className?: string;
};

export const DetailClientItem: FC<TDetailClientItem> = ({
  title,
  description,
  className = ''
}) => {
  return (
    <div className={className}>
      <div className={styles.client__item__title}>{title}</div>
      <div>{description || ''}</div>
    </div>
  );
};
