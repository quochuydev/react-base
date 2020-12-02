import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import {
  MenuItem,
  Select,
  TextField,
  FormControl,
  Grid,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Avatar,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { Alert, Layout } from '../../../components';
import { IUser, IAlert } from '../../../common/interfaces';
import { ParamTypes } from './index.interfaces';
import { userActions } from '../../../actions';
import { initUserState } from '../../../common/initData';

let photo1 = 'https://petstoresaigon.com/wp-content/uploads/2019/03/P-8.jpg';

interface Props {
  user: TODO;
  userActions: TODO;
}

function User({ user, userActions }: Props) {
  const { id } = useParams<ParamTypes>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState<IAlert>({});
  const [data, setData] = useState<IUser>(initUserState.user);

  useEffect(() => {
    userActions.get({ id });
  }, [1]);

  useEffect(() => {
    setData(user);
  }, [user]);

  const CustomizedSelect = ({ form, field, value }: any) => {
    const { name } = field;
    const { setFieldValue } = form;

    let roles = [
      {
        code: 'user',
        name: 'User',
      },
      {
        code: 'admin',
        name: 'Admin',
      },
    ];
    return (
      <Select
        style={{ minWidth: 240 }}
        multiple
        name={name}
        value={value}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      >
        {roles.map((e) => (
          <MenuItem key={e.code} value={e.code}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    );
  };

  const handleClose = (event?: any, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ open: false });
  };

  let timeout = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  return (
    <Layout isLoading={isLoading}>
      <Formik
        enableReinitialize
        initialValues={data}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setIsLoading(true);
          await timeout(700);
          setAlert({
            message: 'Submit success!',
            open: true,
          });
          setIsLoading(false);
        }}
        validate={(value) => {
          return {};
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container>
              <Grid container>
                <Grid item sm={3}>
                  <FormControl className="form">
                    <Avatar
                      variant="rounded"
                      alt="dog"
                      src={photo1}
                      style={{ width: 220, height: 'auto' }}
                    />
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event: any) => {
                        if (event) {
                          var file = event.target.files[0];
                          console.log(file);
                        }
                      }}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        component="span"
                        color="default"
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload
                      </Button>
                    </label>
                  </FormControl>
                </Grid>
                <Grid item sm={9}>
                  <Grid container spacing={3}>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="first_name">first_name</label>
                        <Field
                          component={TextField}
                          type="text"
                          id="first_name"
                          value={values.first_name}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="last_name">last_name</label>
                        <Field
                          component={TextField}
                          type="text"
                          id="last_name"
                          value={values.last_name}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="email">email</label>
                        <Field
                          component={TextField}
                          type="text"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="phone">phone</label>
                        <Field
                          component={TextField}
                          type="text"
                          id="phone"
                          value={values.phone}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="birthday">birthday</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            id="birthday"
                            value={values.birthday}
                            onChange={(value) =>
                              setFieldValue('birthday', value)
                            }
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="gender">gender</label>
                        <Field
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          component={({ field, form, value }: any) => (
                            <RadioGroup
                              row
                              value={value}
                              onChange={(e: any) => {
                                form.setFieldValue(
                                  field.name,
                                  Number(e.target.value)
                                );
                              }}
                            >
                              <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label="Male"
                              />
                              <FormControlLabel
                                value={0}
                                control={<Radio />}
                                label="Female"
                              />
                              <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label="Other"
                              />
                            </RadioGroup>
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="roles">roles</label>
                        <Field
                          name="roles"
                          value={values.roles}
                          component={CustomizedSelect}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                      <FormControl className="form">
                        <label htmlFor="country">country</label>
                        <Field
                          name="country"
                          value={values.country}
                          component={({ form, field, value }: any) => {
                            const { name } = field;
                            const { setFieldValue } = form;

                            let countries = [
                              {
                                code: 'us',
                                name: 'USA',
                              },
                              {
                                code: 'vn',
                                name: 'Vietnam',
                              },
                            ];
                            return (
                              <Select
                                style={{ minWidth: 240 }}
                                name={name}
                                value={value}
                                onChange={(e) => {
                                  setFieldValue(name, e.target.value);
                                }}
                              >
                                {countries.map((e) => (
                                  <MenuItem key={e.code} value={e.code}>
                                    {e.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            );
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={5}>
                      <Field
                        component={TextField}
                        multiline
                        rows={5}
                        type="text"
                        label="description"
                        id="description"
                        fullWidth={true}
                        variant="outlined"
                        value={values.description}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Alert
        open={alert.open}
        message={alert.message}
        type={alert.type}
        timeout={alert.timeout}
        handleClose={handleClose}
      />
    </Layout>
  );
}

const mapStateToProps = (state: TODO) => ({
  user: state.userReducer.user,
});

function mapDispatchToProps(dispatch: TODO) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
