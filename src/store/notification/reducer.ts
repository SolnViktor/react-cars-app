import { createReducer } from '@reduxjs/toolkit';
import { closeNotificationAction, showNotificationAction } from './actions';

export interface INotificationReducer {
  isOpen: boolean;
  message: string;
}

const initialState: INotificationReducer = {
  isOpen: false,
  message: ''
};

export const notificationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showNotificationAction, (state, action) => ({
      ...state,
      ...action.payload,
      isOpen: true
    }))
    .addCase(closeNotificationAction, () => initialState)
    .addDefaultCase((state) => state);
});
