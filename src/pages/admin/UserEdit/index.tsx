import React from 'react';

import { Layout, Tabs } from '../../../components';
import '../style.scss';
import Setting from './Setting';
import Profile from './Profile';
import PaymentSetting from './PaymentSetting';
import { PATHS } from '../../../common/constants';

const { USER_ROUTE } = PATHS;

export default function UserEdit(): TODO {
  return (
    <Layout headers={[{ name: 'User', path: USER_ROUTE }, { name: 'Edit user' }]}>
      <Tabs
        rows={[
          { value: 0, is_show: true, tab: 'Profile', render: <Profile /> },
          { value: 1, is_show: true, tab: 'Setting', render: <Setting /> },
          { value: 2, is_show: true, tab: 'Payment Setting', render: <PaymentSetting /> },
        ]}
      />
    </Layout>
  );
}
