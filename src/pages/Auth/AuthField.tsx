import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { fieldValidator } from './helpers';
import { makeStyles } from '@material-ui/core/styles';
import ErrorMessage from 'common/ErrorMessage';

type TAuthField = {
  error: string;
  value: string;
  setValue: (arg: string) => void;
  setError: (arg: string) => void;
  fieldName: string;
  placeholder: string;
  type: string;
};

const useStyles = makeStyles(() => ({
  textField: {
    marginBottom: '20px'
  }
}));

const AuthField: FC<TAuthField> = ({
  error,
  value,
  setValue,
  setError,
  fieldName,
  placeholder,
  type
}) => {
  const classes = useStyles();
  return (
    <>
      <ErrorMessage showError={!!error} errorMsg={error} />
      <TextField
        placeholder={placeholder}
        value={value}
        className={classes.textField}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => fieldValidator(value, setError, fieldName)}
        type={type}
      />
    </>
  );
};

export default AuthField;
