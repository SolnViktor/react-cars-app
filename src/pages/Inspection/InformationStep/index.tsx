import React, { FC } from 'react';
import { FormField } from '../FormField';
import { CommonButton } from 'common/Button';
import { Tabs } from '../enums';
import { IContractItem } from 'store/contracts/contractsAll/entities';

import styles from './index.module.scss';
import { TInspectionParameter } from 'store/inspection/parameters/entities';
import { getFieldsArray, getInformationKHDFields } from './heplers';

type TInformation = {
  setActiveTab: (arg: Tabs) => void;
  contract: IContractItem | null;
  parameters: Array<TInspectionParameter> | null;
  hasValidationErrors: boolean;
};

export const Information: FC<TInformation> = React.memo(({
  setActiveTab,
  contract,
  parameters,
  hasValidationErrors
}) => {
  const informationKHD = getInformationKHDFields(contract);
  const generalInfo = getFieldsArray(
    parameters,
    ['pts', 'carMileage', 'bodyType'],
    [0, 3, 4]
  );
  const engine = getFieldsArray(
    parameters,
    ['engineType', 'engineSize', 'KPPType', 'transmissionType', 'AKB'],
    [1, 2, 5, 24, 10]
  );
  const alarmSystem = getFieldsArray(
    parameters,
    ['alarmSystem', 'keysCount', 'immobilizersCount', 'startEngine'],
    [12, 8, 9, 39]
  );
  const tires = getFieldsArray(
    parameters,
    ['tyresMark', 'repairKit', 'spareWheel'],
    [5, 25, 7]
  );
  const comfort = getFieldsArray(
    parameters,
    [
      'climateControl',
      'conditioner',
      'extraSeats',
      'electricPassengerSeat',
      'seatCover',
      'carAudio',
      'electricDriverSeat'
    ],
    [18, 19, 37, 36, 34, 11, 35]
  );
  const equipment = getFieldsArray(
    parameters,
    [
      'headlights',
      'parkingControl',
      'videoCamera',
      'runningLights',
      'alloyW  `heels',
      'hubcaps',
      'fogLights',
      'tractionDevice',
      'frontBumperProtection',
      'backBumperProtection',
      'rightDegree',
      'leftDegree',
      'gasEquipment',
      'trunkMat',
      'hatch',
      'deadZoneMonitoring',
      'panoramicRoof',
      'roofRails',
      'interiorMats'
    ],
    [15, 17, 30, 38, 20, 21, 16, 26, 23, 27, 29, 28, 22, 14, 32, 31, 33, 40, 13]
  );
  const additionalEquipment = getFieldsArray(
    parameters,
    [
      'KPPBlocker',
      'shaftLock',
      'roofBox',
      'mudguards',
      'windowDeflectors',
      'hoodDeflector',
      'crankcaseProtection',
      'additionalFogLights',
      'Kung',
      'thresholdProtection'
    ],
    [44, 45, 46, 47, 49, 48, 51, 50, 53, 52]
  );
  const blocks = [
    {
      title: 'Информация из КХД',
      fields: informationKHD
    },
    {
      title: 'Общая информация',
      fields: generalInfo
    },
    {
      title: 'Двигатель / КПП / АКБ / Привод',
      fields: engine
    },
    {
      title: 'Ключи / Сигнализация',
      fields: alarmSystem
    },
    {
      title: 'Резина / Ремонтный Комплект',
      fields: tires
    },
    {
      title: 'Комфорт в салоне',
      fields: comfort
    },
    {
      title: 'Комплектация',
      fields: equipment
    },
    {
      title: 'Дополнительное оборудование',
      fields: additionalEquipment
    }
  ];
  return (
    <div className={styles.information__container}>
      {blocks.map((block, idx) => (
        <React.Fragment key={idx}>
          <div className={styles.block__title}>{block.title}</div>
          <div className={styles.block__wrap}>
            {block.fields.map((el) => (
              <FormField key={el.fieldName} {...el} />
            ))}
          </div>
        </React.Fragment>
      ))}
      <CommonButton
        className={styles.btn}
        isDisabled={hasValidationErrors}
        onClick={() => setActiveTab(Tabs.FOTO)}
      >
        Продолжить
      </CommonButton>
    </div>
  );
});
