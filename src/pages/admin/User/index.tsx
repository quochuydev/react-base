import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
  AddCircleOutline as AddCircleOutlineIcon,
  Cancel as CancelIcon,
  VerifiedUser as VerifiedUserIcon,
} from '@material-ui/icons';

import { UserActions } from '../../../actions';
import { Column, Data } from './index.interfaces';
import { Layout, Table, Line } from '../../../components';
import { Avatar } from '@material-ui/core';
import { photo } from '../../../common/data';
import { PATHS } from '../../../common/constants';
import { timeout } from '../../../utils/common';
import Filter from './Filter';

const { USER_CREATE_ROUTE } = PATHS;

const columns: Column[] = [
  {
    id: 'name',
    label: 'Name',
    render: function IdColumn(value: Data) {
      return (
        <Link to={`/admin/users/${value.id}`}>
          <Line>
            <Avatar src={photo} />
            <span className="m-l-xs">{value.name}</span>
            <CancelIcon fontSize="small" style={{ fill: 'red' }} />
            <VerifiedUserIcon fontSize="small" style={{ fill: 'green' }} />
          </Line>
        </Link>
      );
    },
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
  },
];

function User({ users, userActions }: TODO): TODO {
  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState({ limit: 20, page: 0 });

  useEffect(() => {
    userActions.list(query);
  }, [query]);

  const handleForm = async (values: TODO) => {
    setIsLoading(true);
    setQuery({ ...query, ...values });
    await timeout(500);
    setIsLoading(false);
  };

  const handleTableChange = (page: number, limit: number) => {
    setQuery({ ...query, limit, page });
  };

  return (
    <Layout isLoading={isLoading} headers={[{ name: 'User' }]}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        component={Link}
        to={USER_CREATE_ROUTE}
        className=""
        size="large"
      >
        Add
      </Button>
      <div className="m-t-md"></div>
      <Filter isLoading={isLoading} handleForm={handleForm} />
      <div className="m-t-md"></div>
      <Table limit={query.limit} page={query.page} columns={columns} rows={users} handleChange={handleTableChange} />
    </Layout>
  );
}

const mapStateToProps = (state: TODO) => ({
  users: state.userReducer.users,
});

function mapDispatchToProps(dispatch: TODO) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
