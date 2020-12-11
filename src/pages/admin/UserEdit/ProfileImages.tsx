import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { photo as image } from '../../../common/data';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  small: {
    width: '100%',
    height: theme.spacing(15),
  },
}));

export default function SettingImages(): TODO {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item sm={6}>
        <Avatar variant="rounded" src={image} className={classes.small} />
      </Grid>
      <Grid item sm={6}>
        <Avatar variant="rounded" src={image} className={classes.small} />
      </Grid>
      <Grid item sm={6}>
        <Avatar variant="rounded" src={image} className={classes.small} />
      </Grid>
      <Grid item sm={6}>
        <Avatar variant="rounded" src={image} className={classes.small} />
      </Grid>
    </Grid>
  );
}
