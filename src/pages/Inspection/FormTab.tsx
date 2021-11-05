import React, { FC } from 'react';
import classnames from 'classnames';
import { Tabs } from './enums';

import styles from './formTab.module.scss';

type TFormTab = {
  name: Tabs;
  icon: string;
  activeTab: Tabs;
  setActiveTab: (arg: Tabs) => void;
};

export const FormTab: FC<TFormTab> = ({
  name,
  icon,
  activeTab,
  setActiveTab
}) => {
  return (
    <div
      onClick={() => setActiveTab(name)}
      className={classnames(styles.tab, {
        [styles.active__tab]: name === activeTab
      })}
    >
      <img src={icon} alt="" />
      <div>{name}</div>
    </div>
  );
};
