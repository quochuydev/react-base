import React from 'react';
import { FormControl, Avatar, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './style.scss';

export default function ImageUpload(props: TODO): TODO {
  const { image, setImage } = props;
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
      <label htmlFor="contained-button-file">
        <Button size="small" variant="contained" component="span" color="default" startIcon={<CloudUploadIcon />}>
          Choose image
        </Button>
        <Button size="small" variant="contained" color="default">
          Upload
        </Button>
      </label>
      {image && <Avatar variant="rounded" src={image} className="avatar" />}
    </FormControl>
  );
}
