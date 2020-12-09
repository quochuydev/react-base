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
export default function Alert(props: TODO): TODO {
  const classes = useStyles();
  const open = props.open || false;
  const type = props.type || 'success';
  const timeout = props.timeout || 1500;
  const message = props.message || '';
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={timeout} onClose={props.handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={props.handleClose} severity={type}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
