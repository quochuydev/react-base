// auth
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const LOGGED_USER = 'LOGGED_USER';

// user
export const USER_LIST = 'USER_LIST';
export const USER_GET = 'USER_GET';
export const USER_CREATE = 'USER_CREATE';
export const USER_EDIT = 'USER_EDIT';

const HOME_ROUTE = '';

const LOGIN_ROUTE = `${HOME_ROUTE}/login`;
const RESET_ROUTE = `${HOME_ROUTE}/reset`;
const NEW_PASSWORD_ROUTE = `${HOME_ROUTE}/new-password`;
const PERMISSION_ROUTE = `${HOME_ROUTE}/permission`;

const ADMIN_ROUTE = `${HOME_ROUTE}/admin`;
const DASHBOARD_ROUTE = `${ADMIN_ROUTE}/dashboard`;

const USER_ROUTE = `${ADMIN_ROUTE}/users`;
const USER_CREATE_ROUTE = `${ADMIN_ROUTE}/users_new`;
const USER_EDIT_ROUTE = `${ADMIN_ROUTE}/users/:id`;
const TAG_ROUTE = `${ADMIN_ROUTE}/tags`;
const REPORT_ROUTE = `${ADMIN_ROUTE}/reports`;
const AUCTION_ROUTE = `${ADMIN_ROUTE}/auctions`;

export const PATHS = {
  // base
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESET_ROUTE,
  NEW_PASSWORD_ROUTE,
  PERMISSION_ROUTE,
  // admin
  ADMIN_ROUTE,
  DASHBOARD_ROUTE,
  USER_ROUTE,
  USER_CREATE_ROUTE,
  USER_EDIT_ROUTE,
  TAG_ROUTE,
  REPORT_ROUTE,
  AUCTION_ROUTE,
};
