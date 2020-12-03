import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';

import {
  Layout,
  Input,
  DatePicker,
  ImageUpload,
  Radio,
  Select,
} from '../../../components';

import { IUser, IAlert } from '../../../common/interfaces';
import { ParamTypes } from './index.interfaces';
import { userActions } from '../../../actions';
import { timeout } from '../../../utils/common';
import { initUserState, genders, roles, countries } from '../../../common/data';

import Tabs from '../../../components/Tabs';

import Profile from './Profile';
import Setting from './Setting';

let photo =
  'https://xetaigianat.com/wp-content/uploads/2020/10/0114VAQ09012000-300x267.jpg';

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
    if (id) {
      userActions.get({ id });
    }
  }, []);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleForm = async (values: TODO) => {
    console.log(values);
    setIsLoading(true);
    await timeout(700);
    setAlert({
      message: 'Submit success!',
      open: true,
    });
    setIsLoading(false);
  };

  const validForm = (value: TODO) => {
    return {};
  };

  const [image, setImage] = React.useState<any>(photo);

  return (
    <Layout isLoading={isLoading} alert={alert} setAlert={setAlert}>
      {/* <Tabs
        rows={[
          { tab: 'tab 1', value: 0, render: <Setting /> },
          { tab: 'tab 2', value: 1, render: <div>123</div> },
        ]}
      /> */}
      <Formik
        enableReinitialize
        initialValues={data}
        onSubmit={handleForm}
        validate={validForm}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container>
              <Grid container>
                <Grid item sm={3}>
                  <ImageUpload image={image} setImage={setImage} />
                </Grid>
                <Grid item sm={9}>
                  <Grid container spacing={3}>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.first_name}
                        name="first_name"
                        label="First name"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.last_name}
                        name="last_name"
                        label="last_name"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        label="email"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Input
                        type="text"
                        onChange={handleChange}
                        value={values.phone}
                        name="phone"
                        label="phone"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <DatePicker
                        label={'birthday'}
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        name="birthday"
                        value={values.birthday}
                        onChange={(value: Date) =>
                          setFieldValue('birthday', value)
                        }
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Radio
                        label="gender"
                        name="gender"
                        values={genders}
                        value={values.gender}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Select
                        multiple={true}
                        value={values.roles}
                        values={roles}
                        name="roles"
                        label="roles"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <Select
                        value={values.country}
                        values={countries}
                        name="country"
                        label="Country"
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Input
                        id="address"
                        label="address"
                        value={values.address}
                        style={{ width: '50%' }}
                        type="text"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Input
                        multiline
                        rows={5}
                        type="text"
                        label="description"
                        id="description"
                        fullWidth={true}
                        style={{ width: '50%' }}
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
