import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import Middleware from './components/Middleware';
import LoadSite from './components/LoadSite';

import { ROUTE_LIST } from './utils/routes';
import configureStore from './store';
import NotFound from './pages/NotFound';

import './style.scss';
import './i18n';

const store = configureStore();

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <Router>
          <Middleware>
            <LoadSite>
              <Switch>
                {ROUTE_LIST.map((props, index) => (
                  <Route key={index} {...props} />
                ))}
                <Route key="notfound" path="*" component={NotFound} />
              </Switch>
            </LoadSite>
          </Middleware>
        </Router>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
