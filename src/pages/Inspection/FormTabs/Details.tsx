import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { Tabs } from '../enums';
import { CommonButton } from 'common/Button';

type TDetails = {
  setActiveTab: (arg: Tabs) => void;
};

export const Details: FC<TDetails> = ({ setActiveTab }) => {
  return (
    <div>
      Details
      <h2>Simple Default Input</h2>
      <div>
        <label>Details</label>
        <Field name="details" component="input" placeholder="Details" />
      </div>
      <CommonButton onClick={() => setActiveTab(Tabs.ORDER)}>
        Продолжить
      </CommonButton>
    </div>
  );
};
