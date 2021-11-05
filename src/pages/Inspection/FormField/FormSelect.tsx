import React, { FC } from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FieldInputProps } from 'react-final-form';
import { TParameterValue } from 'store/inspection/parameters/entities';
import styles from './index.module.scss';

type TFormSelect = {
  name: string;
  input: FieldInputProps<string | number>;
  values: Array<TParameterValue> | undefined;
};

export const FormSelect: FC<TFormSelect> = ({ name, input, values }) => {
  values = values ? [...values, {id: '111', name: 'Не выбрано', textRequired: false, textVisible: false }] : undefined
  return (
    <div>
      <InputLabel className={styles.label}>{name}</InputLabel>
      <Select fullWidth {...input}>
        {values?.map((value) => (
          <MenuItem value={value.id} key={value.id}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
