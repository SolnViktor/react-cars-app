import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import styles from './index.module.scss';

type TWrappedComponent = TextFieldProps & FieldRenderProps<string | undefined>;

export const withErrorFieldHOC = (Component: React.ComponentType) => {
  return ({ meta, input, ...props }: TWrappedComponent) => {
    return (
      <div className={styles.error__wrap}>
        {meta.error && meta.touched && (
          <div className={styles.error__msg}>{meta.error}</div>
        )}
        <Component {...{ ...input, ...props }} />
      </div>
    );
  };
};
