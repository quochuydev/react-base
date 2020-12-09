import React from 'react';
import People from '@material-ui/icons/People';

import Login from '../pages/login';
import ResetPassword from '../pages/resetPassword';
import NewPassword from '../pages/newPassword';
import Permission from '../pages/Permission';
import Dashboard from '../pages/admin/Dashboard';
import User from '../pages/admin/User';
import UserCreate from '../pages/admin/UserCreate';
import UserEdit from '../pages/admin/UserEdit';
import Tag from '../pages/admin/Tag';

import { PATHS } from '../common/constants';
import { Routes, Menus } from '../common/interfaces';

const {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  RESET_ROUTE,
  NEW_PASSWORD_ROUTE,
  PERMISSION_ROUTE,
  USER_ROUTE,
  USER_CREATE_ROUTE,
  USER_EDIT_ROUTE,
  TAG_ROUTE,
  REPORT_ROUTE,
} = PATHS;

const ROUTE_LIST: Routes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
  },
  {
    path: RESET_ROUTE,
    component: ResetPassword,
    exact: true,
  },
  {
    path: NEW_PASSWORD_ROUTE,
    component: NewPassword,
    exact: true,
  },
  {
    path: PERMISSION_ROUTE,
    component: Permission,
    exact: true,
  },
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
    path: USER_CREATE_ROUTE,
    component: UserCreate,
    exact: true,
  },
  {
    path: USER_EDIT_ROUTE,
    component: UserEdit,
    exact: true,
  },
  {
    path: TAG_ROUTE,
    component: Tag,
    exact: true,
  },
  {
    path: REPORT_ROUTE,
    component: Tag,
    exact: true,
  },
];

const MENU_DATA: Menus = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    path: PATHS.DASHBOARD_ROUTE,
    icon: <People />,
    is_open: false,
  },
  {
    key: 'user',
    title: 'user',
    path: USER_ROUTE,
    icon: <People />,
    is_open: true,
  },
  {
    key: 'setting',
    title: 'Setting',
    icon: <People />,
    path: '/admin/settings',
    subs: [
      {
        key: 'tag',
        title: 'Tag',
        path: TAG_ROUTE,
        icon: <People />,
        is_open: true,
      },
    ],
    is_open: false,
  },
  {
    key: 'report',
    title: 'Report',
    path: REPORT_ROUTE,
    icon: <People />,
    is_open: false,
  },
];

export { ROUTE_LIST, MENU_DATA };
