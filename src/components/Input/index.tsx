import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Label from '../Label';

const useStyles = makeStyles(() => ({
  labelRoot: {
    color: '#000',
    // fontSize: 18,
    // '&$labelFocused': {
    //   color: 'purple',
    // },
  },
}));

export default function Input({ label, ...props }: TODO): TODO {
  const classes = useStyles();
  return (
    <div>
      {label && <Label text={label} />}
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
    </div>
  );
}
