import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { Tabs } from '../enums';
import { CommonButton } from 'common/Button';

type TFoto = {
  setActiveTab: (arg: Tabs) => void;
};

export const Foto: FC<TFoto> = ({ setActiveTab }) => {
  return (
    <div>
      Foto
      <h2>Simple Default Input</h2>
      <div>
        <label>Foto</label>
        <Field name="foto" component="input" placeholder="Foto" />
      </div>
      <CommonButton onClick={() => setActiveTab(Tabs.DETAILS)}>
        Продолжить
      </CommonButton>
    </div>
  );
};
