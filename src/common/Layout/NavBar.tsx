import React, { FC } from 'react';

import styles from './navBar.module.scss';
import NavItem from './NavItem';
import { Paths } from 'enums/routes';

const navItems = [
  {
    name: 'Контракты',
    path: Paths.CONTRACTS
  },
  {
    name: 'Контроль',
    path: Paths.CONTROL
  },
  {
    name: 'Рекламации',
    path: Paths.COMPLAINT
  },
  {
    name: 'Отчеты',
    path: Paths.REPORTS
  }
];

type TNavBar = {
  onExitHandler: () => void;
};

const NavBar: FC<TNavBar> = ({ onExitHandler }) => {
  return (
    <nav className={styles.nav__container}>
      <ul className={styles.tab__list}>
        {navItems.map((el, idx) => (
          <NavItem key={idx} {...el} />
        ))}
      </ul>
      <div className={styles.exit__btn} onClick={onExitHandler}>
        Выйти
      </div>
    </nav>
  );
};

export default NavBar;
