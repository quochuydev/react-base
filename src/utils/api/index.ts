import Fetch from './fetch';
import _ from 'lodash';

import config from '../config';
import { PATHS } from '../../common/constants';
const { LOGIN_ROUTE, PERMISSION_ROUTE } = PATHS;

const API = new Fetch(
  config.backend_url,
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  },
  { befores: [setHeader], errors: [checkUnauthorized] }
);

export { Fetch, API };

function setHeader(config: TODO) {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    localStorage.clear();
    window.location.href = LOGIN_ROUTE;
    return;
  }
  config.headers['accessToken'] = accessToken;
  return config;
}

function checkUnauthorized(e: TODO): TODO {
  if (!_.isEmpty(e)) {
    if (e.code === 401) {
      localStorage.clear();
      window.location.href = LOGIN_ROUTE;
    } else if (e.code === 403) {
      localStorage.clear();
      window.location.href = PERMISSION_ROUTE;
    }
  }
}
