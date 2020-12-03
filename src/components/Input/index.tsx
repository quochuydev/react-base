import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';

const useStyles = makeStyles(() => ({
  labelRoot: {
    color: '#000',
    // fontSize: 18,
    // '&$labelFocused': {
    //   color: 'purple',
    // },
  },
}));

export default function Input({ ...props }: TODO) {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      InputLabelProps={{
        classes: {
          root: classes.labelRoot,
        },
        shrink: true,
      }}
      variant="outlined"
      size="small"
    />
  );
}
