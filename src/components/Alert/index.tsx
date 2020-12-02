import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Alert(props: any) {
  const classes = useStyles();
  let open = props.open || false;
  let type = props.type || 'success';
  let timeout = props.timeout || 1500;
  let message = props.message || '';
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={timeout}
        onClose={props.handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={props.handleClose}
          severity={type}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
