import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ROUTES } from './App/core/router/routes';
import NotFound from './App/core/error/NotFound';
import Unavailable from './App/core/error/Unavailable';
import rootReducer from './App/core/redux/rootReducer';
import rootSaga from './App/core/redux/rootSaga';
import { APP_CONFIG } from './config/appConfig';
import i18n from './App/core/i18n/i18n';

import './index.scss';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer(history), applyMiddleware(sagaMiddleware, routerMiddleware(history)));

sagaMiddleware.run(rootSaga);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = APP_CONFIG.API_HOST;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route exact path={ROUTES.ERROR_404} component={NotFound} />
            <Route exact path={ROUTES.ERROR_503} component={Unavailable} />
            <Switch>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </Switch>
          </Switch>
        </I18nextProvider>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
