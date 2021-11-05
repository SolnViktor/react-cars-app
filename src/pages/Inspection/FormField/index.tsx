import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';
import { useField } from 'react-final-form';
import { TParameterValue } from 'store/inspection/parameters/entities';
import { FormSelect } from './FormSelect';
import { CommentField } from './CommentField';

import styles from './index.module.scss';

export type TFormField = {
  id: string;
  fieldName: string;
  name: string;
  initialValue?: string | number;
  values: Array<TParameterValue> | undefined;
};

export const FormField: FC<TFormField> = ({
  name,
  initialValue,
  fieldName,
  values,
}) => {
  const currentValue = useField(fieldName);
  const value =
    !!values?.length &&
    values.find((value) => value.id === currentValue.input.value);

  const hasCommentField = !!values?.length && values[0].textVisible;

  const isRenderInput = !values?.length;
  const selectInitValue = !!values?.length ? '111' : undefined
  return (
    <>
      <Field
        name={fieldName}
        initialValue={initialValue || selectInitValue}
        render={({ input }) =>
          isRenderInput ? (
            <TextField {...input} label={name} className={styles.text__field} />
          ) : (
            <FormSelect {...{ name, input, values }} />
          )
        }
      />
      {hasCommentField && !value && <div />}
      {value && value.textVisible && <CommentField fieldName={fieldName} />}
    </>
  );
};
