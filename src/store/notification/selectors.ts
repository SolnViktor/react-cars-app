import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../index';

const notification = (state: TState) => state.notification;

export const getNotificationSelector = createSelector(
  notification,
  (notification) => notification
);
