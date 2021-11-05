import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navItem.module.scss';


type TNavItem = {
  name: string;
  path: string;
};

const NavItem: FC<TNavItem> = ({ name, path }) => {
  return (
    <li className={styles.menu__item}>
      <NavLink to={path} activeClassName={styles.active}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
