import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function NewPassword(): React.ReactNode {
  const classes = useStyles();
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);

  const query = new URLSearchParams(location.search);
  console.log(query.get('test'));

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
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
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="verify-password"
              label="verify-password"
              type="password"
              id="verify-password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default NewPassword;
