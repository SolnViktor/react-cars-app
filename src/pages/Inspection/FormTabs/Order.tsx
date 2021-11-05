import React, { FC } from 'react';
import {Field} from "react-final-form";
import { Tabs } from '../enums';
import { CommonButton } from 'common/Button';


type TOrder = {
  setActiveTab: (arg: Tabs) => void;
};

export const Order: FC<TOrder> = ({ setActiveTab }) => {
  return (
    <div>
      Order
      <h2>Simple Default Input</h2>
      <div>
        <label>Order</label>
        <Field name="order" component="input" placeholder="Order" />
      </div>
      <CommonButton onClick={() => setActiveTab(Tabs.FINISH)}>
        Продолжить
      </CommonButton>
    </div>
  );
};
