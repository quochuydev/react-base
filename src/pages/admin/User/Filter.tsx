import React from 'react';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import { Input, Select } from '../../../components';
import { genders, countries } from '../../../common/data';

export default function Filter(props: TODO): TODO {
  const { handleForm, isLoading } = props;

  return (
    <Formik enableReinitialize initialValues={{ text_search: '', genders: [], countries: [] }} onSubmit={handleForm}>
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
  );
}
