import React from 'react';
import { FormControl, Avatar, Button, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { photo } from '../../common/data';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function ImageUpload(props: TODO): TODO {
  const classes = useStyles();

  const [image, setImage] = React.useState<TODO>(null);

  return (
    <FormControl className="form">
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event: TODO) => {
          try {
            const file = event.target.files[0];
            console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
              setImage(reader.result);
            };
          } catch (error) {
            console.log(error);
          }
        }}
      />
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          image && (
            <button
              type="button"
              onClick={() => {
                setImage(null);
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <strong>x</strong>
            </button>
          )
        }
      >
        <label htmlFor="contained-button-file">
          <Button
            className={image ? '' : ''}
            size="small"
            variant="contained"
            component="span"
            color="default"
            style={{ padding: 0 }}
          >
            <Avatar variant="rounded" src={image} className={classes.small} />
          </Button>
        </label>
      </Badge>
    </FormControl>
  );
}
