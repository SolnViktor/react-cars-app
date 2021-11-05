import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import { App } from './App';

import 'styles/global.scss';
import NotificationContainer from './common/Notification';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
      <NotificationContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
