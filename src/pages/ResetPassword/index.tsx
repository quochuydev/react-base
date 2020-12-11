import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';
import theme from './theme';

const useStyles = makeStyles(theme);

function ResetPassword(): React.ReactNode {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState({ email: '' });

  function handleChange(e: TODO) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      {redirect ? <Redirect to="/admin" /> : null}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset password
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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

export default ResetPassword;
