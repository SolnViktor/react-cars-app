import { createAction } from '@reduxjs/toolkit';
import { TShowNotification } from './entities';

const SHOW_NOTIFICATION = '@notification/SHOW_NOTIFICATION';

export const showNotificationAction =
  createAction<TShowNotification>(SHOW_NOTIFICATION);

const CLOSE_NOTIFICATION = '@notification/CLOSE_NOTIFICATION';

export const closeNotificationAction =
    createAction(CLOSE_NOTIFICATION);
