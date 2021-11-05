import { configureStore } from '@reduxjs/toolkit';
import {createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { indexReducer } from './rootReducer';

const history = createBrowserHistory();
const store = configureStore({
  reducer: indexReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true
    }).concat(routerMiddleware(history))
});
export type TState = ReturnType<typeof store.getState>

export { history, store };
