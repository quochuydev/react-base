import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Form } from 'formik';
import { Grid, Button, Slider, Checkbox, FormControlLabel } from '@material-ui/core';

import { Select, Effect, Label } from '../../../components';
import { IAlert } from '../../../common/interfaces';
import { UserActions } from '../../../actions';
import { timeout, getAge } from '../../../utils/common';

function Setting({ user }: TODO) {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<IAlert>({});

  const handleForm = async (values: TODO) => {
    console.log(values);
    setIsLoading(true);
    await timeout(500);
    setIsLoading(false);
  };

  const userAge = getAge(user.birthday);
  const ageRange = { min: userAge - 10, max: userAge + 10 };
  const [ages, setAges] = React.useState<number[]>([18, 25]);
  const handleSlider = (event: TODO, newValue: number | number[]) => {
    setAges(newValue as number[]);
  };

  const [maxDistance, setMaxDistance] = React.useState<number>(20);
  const handleMaxDistance = (event: TODO, newValue: number | number[]) => {
    setMaxDistance(newValue as number);
  };

  return (
    <>
      <Formik
        initialValues={{ showDistanceIn: 'km', show: '', languages: [], auctionOnly: false }}
        onSubmit={handleForm}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <Select
                  values={[
                    { code: 'man', name: 'Man' },
                    { code: 'women', name: 'Women' },
                    { code: 'everyone', name: 'Everyone' },
                  ]}
                  value={values.show}
                  valueKey="code"
                  name="show"
                  label="Show me"
                />
              </Grid>
              <Grid item sm={3}>
                <Select
                  values={[
                    { code: 'mi', name: 'Mi' },
                    { code: 'km', name: 'Km' },
                  ]}
                  value={values.showDistanceIn}
                  valueKey="code"
                  name="showDistanceIn"
                  label="Show distance in"
                />
              </Grid>
              <Grid item sm={3}>
                <Label text={`Maximum distance: ${maxDistance} ${values.showDistanceIn}`} />
                <Slider value={maxDistance} onChange={handleMaxDistance} aria-labelledby="input-slider" max={25} />
              </Grid>
              <Grid item sm={3}>
                <Label text={`Age range: ${ages.join(' - ')}`} />
                <Slider
                  value={ages}
                  onChange={handleSlider}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={ageRange.min}
                  max={ageRange.max}
                />
              </Grid>
              <Grid item sm={3}>
                <Select
                  multiple={true}
                  value={values.languages}
                  values={[{ code: 'en', name: 'English' }]}
                  valueKey="code"
                  name="languages"
                  label="Languages"
                />
              </Grid>
              <Grid item sm={3}>
                <FormControlLabel
                  control={<Checkbox checked={values.auctionOnly} name="auctionOnly" onChange={handleChange} />}
                  label="Show auction only"
                />
              </Grid>
              <Grid item sm={12}>
                <Button type="submit" variant="outlined" color="secondary" disabled={isLoading}>
                  Save
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
