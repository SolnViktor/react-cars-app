import React, { FC } from 'react';
import styles from './notification.module.scss';

type TNotification = {
  message: string;
};

export const Notification: FC<TNotification> = ({ message }) => (
  <div className={styles.notification}>{message}</div>
);
