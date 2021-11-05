import React, { SyntheticEvent } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';
import { useState } from 'react';

export const Search = ({ placeholder, onChange }: any) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value)
  };

  return (
    <div className={styles.search__wrap}>
      <input
        value={value}
        onChange={onChangeHandler}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      <SearchIcon className={styles.search__icon} />
    </div>
  );
};
