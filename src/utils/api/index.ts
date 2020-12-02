import apiClient from './apiClient';
import Fetch from './fetch';

let API = new Fetch('http://localhost:3000', {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
});

export { apiClient, Fetch, API };
