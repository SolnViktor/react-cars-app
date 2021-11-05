import { Paths } from 'enums/routes';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

type THeader = {
  title: string;
  pathTo?: string;
};

export const Header: FC<THeader> = ({ title, pathTo }) => {
  return (
    <div className={styles.inspection__header}>
      <Link to={pathTo || Paths.CONTRACTS}>
        <div className={styles.back}>Назад</div>
      </Link>
      <div className={styles.title}>Осмотр ТС {title}</div>
    </div>
  );
};
