import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  labelRoot: {
    color: '#000',
    fontSize: 18,
  },
}));

export default function DatePicker(props: TODO): TODO {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        InputLabelProps={{
          classes: {
            root: classes.labelRoot,
          },
          shrink: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
