import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Grid } from '@material-ui/core';
import { Cancel as CancelIcon, VerifiedUser as VerifiedUserIcon } from '@material-ui/icons';

import { Input, DatePicker, ImageUpload, Radio, Select, Effect, Submit, Line } from '../../../components';
import { IUser, IAlert } from '../../../common/interfaces';
import { ParamTypes } from './index.interfaces';
import { UserActions } from '../../../actions';
import { initUserState, genders, roles, countries } from '../../../common/data';
import ProfileImages from './ProfileImages';

interface Props {
  user: TODO;
  userActions: TODO;
}

function Profile({ user, userActions }: Props): TODO {
  const { t } = useTranslation('basic');

  const { id } = useParams<ParamTypes>();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<IAlert>({});
  const [data, setData] = useState<IUser>(initUserState.user);

  useEffect(() => {
    if (id) {
      userActions.get({ id });
    }
  }, []);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleForm = async (values: TODO, { resetForm }: TODO) => {
    setIsLoading(true);
    try {
      const result = await userActions.update({ id }, values);
      setAlert({ message: result.message, open: true });
    } catch (error) {
      setAlert({ type: 'error', message: error.message, open: true });
    }
    resetForm();
    setIsLoading(false);
  };

  const validForm = (value: TODO) => {
    return {};
  };

  return (
    <>
      <Formik enableReinitialize initialValues={data} onSubmit={handleForm} validate={validForm}>
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <ProfileImages />
                {/* <ImageUpload /> */}
              </Grid>
              <Grid item sm={9}>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <Line>
                      <CancelIcon style={{ fill: 'red' }} />
                      <VerifiedUserIcon style={{ fill: 'green' }} />
                      <span className="m-l-xs">Not verified user.</span>
                    </Line>
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <Input
                      type="text"
                      onChange={handleChange}
                      value={values.first_name}
                      name="first_name"
                      label={t('first_name')}
                      style={{ width: '60%' }}
                    />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <Input
                      type="text"
                      onChange={handleChange}
                      value={values.last_name}
                      name="last_name"
                      label={t('last_name')}
                      style={{ width: '60%' }}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <Input
                      type="text"
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      label={t('email')}
                      style={{ width: '60%' }}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <Input
                      type="text"
                      onChange={handleChange}
                      value={values.phone}
                      name="phone"
                      label={t('phone')}
                      style={{ width: '60%' }}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <DatePicker
                      label={t('birthday')}
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      name="birthday"
                      value={values.birthday}
                      onChange={(value: Date) => setFieldValue('birthday', value)}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <Radio
                      label={t('gender')}
                      name="gender"
                      values={genders}
                      value={values.gender}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <Select value={values.country} values={countries} valueKey="code" name="country" label="Country" />
                  </Grid>
                  <Grid item sm={6}>
                    <Select
                      multiple={true}
                      value={values.roles}
                      values={roles}
                      valueKey="code"
                      name="roles"
                      label={t('role')}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Input
                      id="address"
                      label={t('address')}
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
                      label={t('description')}
                      id="description"
                      fullWidth={true}
                      style={{ width: '50%' }}
                      variant="outlined"
                      value={values.description}
                      onChange={handleChange}
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
  );
}

const mapStateToProps = (state: TODO) => ({
  user: state.userReducer.user,
});

function mapDispatchToProps(dispatch: TODO) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
