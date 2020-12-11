import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Grid } from '@material-ui/core';

import { Layout, Input, Select, Effect, Submit } from '../../../components';
import { IUser, IAlert } from '../../../common/interfaces';
import { UserActions } from '../../../actions';
import { initUserState, roles } from '../../../common/data';
import { PATHS } from '../../../common/constants';

const { USER_ROUTE } = PATHS;

export default function UserCreate(): TODO {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<IAlert>({});
  const data = { ...initUserState.user, password: '', confirmPassword: '' };

  const handleForm = async (values: TODO, { resetForm }: TODO) => {
    console.log(values);
    setIsLoading(true);
    try {
      const result = { message: 'message' };
      setAlert({ message: result.message, open: true });
    } catch (error) {
      setAlert({ type: 'error', message: error.message, open: true });
    }
    setIsLoading(false);
  };

  const validForm = (value: TODO) => {
    return {};
  };

  return (
    <Layout headers={[{ name: 'User', path: USER_ROUTE }, { name: 'New user' }]}>
      <>
        <Formik enableReinitialize initialValues={data} onSubmit={handleForm} validate={validForm}>
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.first_name}
                        name="first_name"
                        label="first_name"
                        style={{ width: '60%' }}
                      />
                    </Grid>
                    <Grid item md={6} sm={12}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.last_name}
                        name="last_name"
                        label="last_name"
                        style={{ width: '60%' }}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        label="email"
                        style={{ width: '60%' }}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.phone}
                        name="phone"
                        label="phone"
                        style={{ width: '60%' }}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        label="Password"
                        style={{ width: '60%' }}
                      />
                      <br />
                      <Input
                        type="password"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        name="confirmPassword"
                        label="Confirm password"
                        style={{ width: '60%' }}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Select
                        multiple={true}
                        value={values.roles}
                        values={roles}
                        valueKey="code"
                        name="roles"
                        label="roles"
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Submit disabled={isLoading}>Save</Submit>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Effect isLoading={isLoading} alert={alert} setAlert={setAlert} />
      </>
    </Layout>
  );
}
