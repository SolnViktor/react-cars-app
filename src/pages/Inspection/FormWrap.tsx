import React, { FC, useState } from 'react';
import { Form } from 'react-final-form';
import infoIcon from 'images/inspection/1-info.svg';
import fotoIcon from 'images/inspection/2-photo.svg';
import detailsIcon from 'images/inspection/3-details.svg';
import orderIcon from 'images/inspection/4-order.svg';
import finishIcon from 'images/inspection/5-finish.svg';
import { FormTab } from './FormTab';
import { Tabs } from './enums';
import { Information } from './InformationStep';
import { Foto } from './FormTabs/Foto';
import { Details } from './FormTabs/Details';
import { Order } from './FormTabs/Order';
import { Finish } from './FormTabs/Finish';
import { IContractItem } from 'store/contracts/contractsAll/entities';
import { TInspectionParameter } from 'store/inspection/parameters/entities';

import styles from './form.module.scss';

const formTabs = [
  {
    name: Tabs.INFORMATION,
    icon: infoIcon
  },
  {
    name: Tabs.FOTO,
    icon: fotoIcon
  },
  {
    name: Tabs.DETAILS,
    icon: detailsIcon
  },
  {
    name: Tabs.ORDER,
    icon: orderIcon
  },
  {
    name: Tabs.FINISH,
    icon: finishIcon
  }
];

type TFormWrap = {
  contract: IContractItem | null;
  parameters: Array<TInspectionParameter> | null;
};

export const FormWrap: FC<TFormWrap> = ({ contract, parameters }) => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.INFORMATION);

  const getStep = (hasValidationErrors: boolean) => {
    const formSteps = {
      [Tabs.INFORMATION]: (
        <Information
          {...{ setActiveTab, contract, parameters, hasValidationErrors }}
        />
      ),
      [Tabs.FOTO]: <Foto setActiveTab={setActiveTab} />,
      [Tabs.DETAILS]: <Details setActiveTab={setActiveTab} />,
      [Tabs.ORDER]: <Order setActiveTab={setActiveTab} />,
      [Tabs.FINISH]: <Finish setActiveTab={setActiveTab} />
    };

    return formSteps[activeTab];
  };

  const onSubmit = (values: any) => {
    console.log('onSubmit ', values);
  };

  return (
    <div className={styles.form__container}>
      <div className={styles.tabs__wrap}>
        {formTabs.map((el, idx) => (
          <FormTab
            key={idx}
            {...el}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, hasValidationErrors }) => {
            return (
              <form onSubmit={handleSubmit}>
                {getStep(hasValidationErrors)}
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};
