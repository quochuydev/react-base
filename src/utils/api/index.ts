import Fetch from './fetch';
import _ from 'lodash';

function checkUnauthorized(e: TODO): TODO {
  if (!_.isEmpty(e)) {
    if (e.code === 401) {
      localStorage.clear();
      window.location.href = '/login';
    } else if (e.code === 403) {
      localStorage.clear();
      window.location.href = '/permission';
    }
  }
}

const API = new Fetch(
  'http://localhost:3000',
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  },
  { errors: [checkUnauthorized] }
);

export { Fetch, API };
