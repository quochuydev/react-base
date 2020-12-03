import React from 'react';
import { Field } from 'formik';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  small: {
    '& .MuiSelect-outlined': {
      padding: 10,
    },
  },
}));

export default function SelectCustom(props: TODO) {
  const { label, name, values, value, multiple } = props;
  const classes = useStyles();

  return (
    <Field
      name={name}
      value={value}
      component={({ form, field, value }: any) => {
        const { name } = field;
        return (
          <div>
            <InputLabel shrink className="text-black">
              {label}
            </InputLabel>
            <Select
              className={classes.small}
              variant={'outlined'}
              multiple={multiple}
              style={{ minWidth: 240 }}
              name={name}
              value={value}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
              }}
            >
              {values.map((e: any) => (
                <MenuItem key={e.code} value={e.code}>
                  {e.name}
                </MenuItem>
              ))}
            </Select>
          </div>
        );
      }}
    />
  );
}
