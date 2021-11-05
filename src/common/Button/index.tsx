import React, { FC } from 'react';
import classnames from 'classnames';

import style from './index.module.scss';
import { ButtonTypes, TCommonButton, TSubmitButton } from './types';

export const CommonButton: FC<TCommonButton> = ({
  children,
  isDisabled,
  className = '',
  type = ButtonTypes.Primary,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(style.common__btn, {
        [style.secondary]: type === ButtonTypes.Secondary,
        [className]: className
      })}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export const SubmitButton: FC<TSubmitButton> = ({
  children,
  isDisabled,
  className = ''
}) => {
  return (
    <button
      className={classnames(style.common__btn, {
        [className]: className
      })}
      type="submit"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
