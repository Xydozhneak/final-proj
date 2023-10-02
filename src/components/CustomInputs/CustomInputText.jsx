import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function CustomInputText({
  control,
  name,
  defaultValue = '',
  rules,
  label,
  ...props
}) {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          type="text"
          label={label}
          value={value}
          inputRef={ref}
          onChange={onChange}
          margin="normal"
          error={!!error}
          helperText={error ? error.message : ''}
          {...props}
        />
      )}
    />
  );
}
