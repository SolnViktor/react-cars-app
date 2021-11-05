import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { userReducer } from './user/reducer';
import { notificationReducer } from './notification/reducer';
import { contractsReducer } from './contracts/reducer';
import {inspectionReducer} from "./inspection/reducer";

const indexReducer = (history: History) => ({
  user: userReducer,
  notification: notificationReducer,
  contracts: contractsReducer,
  inspection: inspectionReducer,
  router: connectRouter(history)
});

export { indexReducer };
