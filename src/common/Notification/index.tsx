import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationSelector } from 'store/notification/selectors';
import { closeNotificationAction } from 'store/notification/actions';
import { useDidMound } from 'customHooks/useDidMound';
import { Notification } from './Notification';

const NotificationContainer = () => {
  const dispatch = useDispatch();
  const notification = useSelector(getNotificationSelector);

  useDidMound(() => {
    if (notification.isOpen) {
      const timeout = setTimeout(() => {
        dispatch(closeNotificationAction());
      }, 3000);

      () => {
        clearTimeout(timeout);
      };
    }
  }, [notification]);

  return (
    <>
      {notification.isOpen && <Notification message={notification.message} />}
    </>
  );
};
export default NotificationContainer;
