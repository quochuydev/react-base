import React from 'react';
import { Field } from 'formik';
import { MenuItem, Select, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Label from '../Label';

const useStyles = makeStyles(() => ({
  small: {
    '& .MuiSelect-outlined': {
      padding: 10,
    },
  },
}));

export default function SelectCustom({
  label,
  name,
  values,
  value,
  multiple,
  valueKey = 'id',
  placeholder,
  ...props
}: TODO): TODO {
  const classes = useStyles();

  function formatDataText(values: TODO, value: TODO, valueKey: string) {
    return values.find((e: TODO) => e[valueKey] === value)['name'];
  }

  return (
    <Field
      name={name}
      value={value}
      component={({ form, field, value }: TODO) => {
        const { name } = field;
        placeholder = placeholder || 'None';

        return (
          <>
            {label && <Label text={label} />}
            <Select
              displayEmpty
              className={classes.small}
              variant={'outlined'}
              multiple={multiple}
              style={{ minWidth: 240 }}
              name={name}
              value={value}
              onChange={(e) => {
                form.setFieldValue(name, e.target.value);
              }}
              renderValue={(selected) => {
                if (!selected || (selected as string[]).length === 0) {
                  return <em>{placeholder}</em>;
                }
                if (!multiple) {
                  return formatDataText(values, selected, valueKey);
                }
                return (selected as string[]).map((e: TODO) => formatDataText(values, e, valueKey)).join(', ');
              }}
              {...props}
            >
              {values.map((e: TODO) => (
                <MenuItem key={e[valueKey]} value={e[valueKey]}>
                  {multiple && <Checkbox checked={value.includes(e[valueKey])} />}
                  {e.name}
                </MenuItem>
              ))}
            </Select>
          </>
        );
      }}
    />
  );
}
