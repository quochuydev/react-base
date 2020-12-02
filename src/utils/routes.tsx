import React from 'react';
import People from '@material-ui/icons/People';

import Login from '../pages/login';
import Dashboard from '../pages/admin/Dashboard';
import User from '../pages/admin/User';
import UserEdit from '../pages/admin/UserEdit';

import { PATHS } from '../common/constants';
import { Routes, Menus } from '../common/interfaces';

const {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  DASHBOARD_ROUTE,
  USER_ROUTE,
  USER_EDIT_ROUTE,
} = PATHS;

const RouteList: Routes = [
  {
    path: ADMIN_ROUTE,
    component: Dashboard,
    exact: true,
  },
  {
    path: USER_ROUTE,
    component: User,
    exact: true,
  },
  {
    path: USER_EDIT_ROUTE,
    component: UserEdit,
    exact: true,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
  },
];

const MENU_DATA: Menus = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    path: ADMIN_ROUTE,
    icon: <People />,
    is_open: false,
  },
  {
    key: 'user',
    title: 'Users',
    path: USER_ROUTE,
    icon: <People />,
    is_open: true,
  },
];

export { RouteList, MENU_DATA };
