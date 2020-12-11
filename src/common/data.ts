import testPhoto from '../assets/images/P-8.jpg';
import logoPhoto from '../assets/images/InApps_Technology_logo.png';
import us from '../assets/images/us.png';
import vn from '../assets/images/vn.png';

export const photo = testPhoto;
export const logo = logoPhoto;

export const FLAGS = [
  { key: 'en', value: 'en', image: us },
  { key: 'vi', value: 'vi', image: vn },
];

export const initUserState = {
  user: {
    first_name: '',
    last_name: '',
    gender: 1,
    birthday: null,
    email: '',
    description: '',
    roles: [],
    country: '',
    phone: '',
    address: '',
  },
  user_staff: {
    first_name: '',
    last_name: '',
    email: '',
    roles: [],
    phone: '',
    password: '',
    confirmPassword: '',
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
