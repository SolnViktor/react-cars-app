import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { Tabs } from '../enums';
import { SubmitButton } from 'common/Button';

type TFinish = {
  setActiveTab: (arg: Tabs) => void;
};

export const Finish: FC<TFinish> = ({ setActiveTab }) => {
  return (
    <div>
      Finish
      <h2>Simple Default Input</h2>
      <div>
        <label>Finish</label>
        <Field name="finish" component="input" placeholder="finish" />
      </div>
      <SubmitButton>Отправить</SubmitButton>
    </div>
  );
};
