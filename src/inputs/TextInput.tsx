import React, { ChangeEvent, FC } from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

import { ITextInput } from '../types';

import InputRoot from './InputRoot';

const TextInput: FC<ITextInput> = (props) => {
  const {
    id,
    caption,
    tooltip,
    value,
    contentType = 'text',
    size = 'small',
    big = false,
    suffix = '',
    inside = false,
    disabled = false,
    button = false,
    onChange,
  } = props;

  const onValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      const val = e?.target?.value;
      if (contentType === 'number') {
        if (!Number.isNaN(Number(val))) {
          onChange(Number(val));
        }
      } else {
        onChange(val);
      }
    }
  };

  return (
    <InputRoot size={size} inside={inside} button={button}>
      <FormControl>
        <InputLabel htmlFor={id}>{caption}</InputLabel>
        <OutlinedInput
          id={id}
          label={caption}
          value={value}
          disabled={disabled}
          size={big ? 'medium' : 'small'}
          endAdornment={suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : undefined}
          fullWidth={inside}
          onChange={onValueChange}
        />
        {tooltip && <FormHelperText>{tooltip}</FormHelperText>}
      </FormControl>
    </InputRoot>
  );
};

export default TextInput;
