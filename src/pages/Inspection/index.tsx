import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation} from "react-router-dom";
import { LeftSideLayout } from 'common/Layout/LeftSideLayout';
import { Header } from './Header';
import { getContractByCarAction } from 'store/contracts/contractByCar/actions';
import {
  getContractByCarDataSelector,
  getContractByCarLoadingSelector
} from 'store/contracts/contractByCar/selectors';
import { Loader } from 'common/Loader';

import styles from './index.scss';
import {FormWrap} from "./FormWrap";
import {getInspectionParametersAction} from "../../store/inspection/parameters/actions";
import {getParametersDataSelector, getParametersLoadingSelector} from "../../store/inspection/parameters/selectors";

type TParams = {
  id: string;
};
type TLocation = {
  from?: string | undefined;
};

export const InspectionContainer = () => {
  const { id } = useParams<TParams>();
  const dispatch = useDispatch();
  const { state } = useLocation<TLocation | undefined>();

  const contract = useSelector(getContractByCarDataSelector);
  const parameters = useSelector(getParametersDataSelector);
  const contractLoading = useSelector(getContractByCarLoadingSelector);
  const parametersLoading = useSelector(getParametersLoadingSelector);

  useEffect(() => {
    dispatch(getContractByCarAction({ carId: id }));
    dispatch(getInspectionParametersAction());
  }, []);
  if (contractLoading || parametersLoading) return <Loader loading={contractLoading}/>;

  const title = `${contract?.car.model} ${contract?.car.make}`;

  return (
    <div className={styles.inspection__container}>
      <LeftSideLayout>
        <Header title={title} pathTo={state?.from}/>
        <FormWrap contract={contract} parameters={parameters}/>
      </LeftSideLayout>
    </div>
  );
};
