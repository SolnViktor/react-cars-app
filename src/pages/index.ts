import { ContractsContainer } from 'pages/Contracts';
import { Paths } from 'enums/routes';
import { Control } from 'pages/Control';
import { Complaint } from './Complaint';
import { Reports } from './Reports';
import {InspectionContainer} from "./Inspection";

export const layoutPages = [
  {
    component: ContractsContainer,
    path: Paths.CONTRACTS,
    exact: true
  },
  {
    component: Control,
    path: Paths.CONTROL,
    exact: true
  },
  {
    component: Complaint,
    path: Paths.COMPLAINT,
    exact: true
  },
  {
    component: Reports,
    path: Paths.REPORTS,
    exact: true
  },
  {
    component: InspectionContainer,
    path: `${Paths.INSPECTION}/:id`,
    exact: true
  },
];
