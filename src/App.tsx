import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import Middleware from './components/Middleware';
import { RouteList } from './utils/routes';
import configureStore from './store';

import './style.scss';
import './i18n';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <Router>
          <Middleware>
            <Switch>
              {RouteList.map((props, index) => (
                <Route key={index} {...props} />
              ))}
            </Switch>
          </Middleware>
        </Router>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
