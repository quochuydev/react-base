// auth
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// user
export const USER_GET = 'USER_GET';
export const USER_EDIT = 'USER_EDIT';

const HOME_ROUTE = ``;
const LOGIN_ROUTE = `${HOME_ROUTE}/login`;
const ADMIN_ROUTE = `${HOME_ROUTE}/admin`;
const DASHBOARD_ROUTE = `${ADMIN_ROUTE}/dashboard`;
const USER_ROUTE = `${ADMIN_ROUTE}/users`;
const USER_EDIT_ROUTE = `${ADMIN_ROUTE}/users/:id`;

export const PATHS = {
  HOME_ROUTE,
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  DASHBOARD_ROUTE,
  USER_ROUTE,
  USER_EDIT_ROUTE,
};
