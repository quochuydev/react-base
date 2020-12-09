import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { Column, Data } from './index.interfaces';
import { Layout, Input, Select, Table, Line } from '../../../components';
import { genders, countries } from '../../../common/data';
import { timeout } from '../../../utils/common';
import { Avatar } from '@material-ui/core';
import { photo } from '../../../common/data';
import { PATHS } from '../../../common/constants';
const { USER_CREATE_ROUTE } = PATHS;

export default function User(): TODO {
  const [isLoading, setIsLoading] = React.useState(false);

  const columns: Column[] = [
    {
      id: 'id',
      label: 'id',
      minWidth: 170,
      render: function IdColumn(value: Data) {
        return (
          <Link to={`/admin/users/${value.id}`}>
            <Line>
              <Avatar src={photo} />
              <span className="m-l-xs">{value.name}</span>
            </Line>
          </Link>
        );
      },
    },
    {
      id: 'name',
      label: 'name',
      minWidth: 170,
      render: function NameColumn(value: Data) {
        return <Button onClick={() => console.log(123)}>{value.name}</Button>;
      },
    },
    {
      id: 'date',
      label: 'date',
      minWidth: 170,
    },
  ];

  const rows = [
    { id: 1, name: 'Michael Jackson', date: '16 Mar, 2019' },
    { id: 2, name: 'Bruce Springsteen', date: '15 Mar, 2019' },
  ];

  const handleForm = async (values: TODO) => {
    setIsLoading(true);
    console.log(values);
    await timeout(500);
    setIsLoading(false);
  };

  const handleChange = (page: number, limit: number) => {
    console.log(limit, page);
  };

  return (
    <Layout isLoading={isLoading}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        component={Link}
        to={USER_CREATE_ROUTE}
        className="hide"
      >
        Add
      </Button>
      <div className="m-t-md hide"></div>
      <Formik
        enableReinitialize
        initialValues={{ limit: 10, page: 1, text_search: '', genders: [], countries: [] }}
        onSubmit={handleForm}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={3} className="hide">
                <Select
                  multiple={true}
                  value={values.genders}
                  valueKey="value"
                  values={genders}
                  name="genders"
                  label="genders"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item sm={3} className="hide">
                <Select
                  multiple={true}
                  value={values.countries}
                  valueKey="code"
                  values={countries}
                  name="countries"
                  label="countries"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item sm={12}>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={values.text_search}
                  placeholder="Search..."
                  name="text_search"
                  style={{ width: '100%' }}
                  InputProps={{
                    endAdornment: (
                      <Button type="submit" disabled={isLoading}>
                        <SearchIcon />
                      </Button>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} className="hide">
                <Button type="submit" variant="outlined" color="secondary">
                  Apply filter
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <div className="m-t-md"></div>
      <Table columns={columns} rows={rows} handleChange={handleChange} />
    </Layout>
  );
}
