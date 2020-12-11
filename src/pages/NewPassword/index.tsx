import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';
import { PATHS } from '../../common/constants';
import theme from '../ResetPassword/theme';

const { LOGIN_ROUTE } = PATHS;

const useStyles = makeStyles(theme);

function NewPassword(): React.ReactNode {
  const classes = useStyles();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState({ password: '', verifyPassword: '' });

  function handleChange(e: TODO) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(query.get('test'));
    console.log(data);
    // setRedirect(true);
  };

  return (
    <div>
      {redirect ? <Redirect to={LOGIN_ROUTE} /> : null}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New password
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="verifyPassword"
              label="verifyPassword"
              type="password"
              id="verifyPassword"
              value={data.verifyPassword}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default NewPassword;
