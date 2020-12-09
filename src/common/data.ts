export const initUserState = {
  user: {
    first_name: '',
    last_name: '',
    gender: 1,
    birthday: new Date('1998-12-05T01:00:00.000Z'),
    email: '',
    description: '',
    roles: ['user'],
    country: 'us',
    phone: '',
    address: '',
  },
  users: [],
};

export const genders = [
  {
    value: 1,
    name: 'Male',
  },
  {
    value: 0,
    name: 'Female',
  },
  {
    value: 2,
    name: 'Other',
  },
];

export const roles = [
  {
    code: 'user',
    name: 'User',
  },
  {
    code: 'admin',
    name: 'Admin',
  },
];

export const countries = [
  {
    code: 'us',
    name: 'USA',
  },
  {
    code: 'vn',
    name: 'Vietnam',
  },
];

import testPhoto from '../assets/images/P-8.jpg';
import logoPhoto from '../assets/images/InApps_Technology_logo.png';

export const photo = testPhoto;
export const logo = logoPhoto;
