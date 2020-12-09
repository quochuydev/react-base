import React from 'react';
import { Button } from '@material-ui/core';

export default function Submit(props: TODO): TODO {
  return (
    <Button type="submit" variant="outlined" color="secondary" {...props}>
      {props.children}
    </Button>
  );
}
