import React from 'react';
import { Field } from 'formik';
import {
  Radio as MuiRadio,
  InputLabel,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

export default function Radio(props: TODO) {
  const { label, name, values, value, onChange } = props;
  return (
    <div>
      <InputLabel shrink className="text-black">
        {label}
      </InputLabel>
      <Field
        name={name}
        value={value}
        onChange={onChange}
        component={({ field, form, value }: any) => {
          return (
            <RadioGroup
              row
              value={value}
              onChange={(e: any) => {
                form.setFieldValue(field.name, Number(e.target.value));
              }}
            >
              {values.map((e: any) => (
                <FormControlLabel
                  key={e.value}
                  value={e.value}
                  control={<MuiRadio />}
                  label={e.name}
                />
              ))}
            </RadioGroup>
          );
        }}
      />
    </div>
  );
}
