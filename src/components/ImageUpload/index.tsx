import React from 'react';
import { FormControl, Avatar, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function ImageUpload(props: TODO) {
  const { image, setImage } = props;
  return (
    <FormControl className="form">
      <Avatar
        variant="rounded"
        alt="dog"
        src={image}
        style={{ width: 220, height: 'auto' }}
      />
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event: any) => {
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
        <Button
          variant="contained"
          component="span"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </label>
    </FormControl>
  );
}
