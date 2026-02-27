import React, { ChangeEvent, FC } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { Root } from '../styles';
import { ITextInput } from '../types';

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

  const slotProps = {
    ...(suffix
      ? {
          input: {
            endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
          },
        }
      : {}),
  };

  return (
    <Root size={size} inside={inside} button={button}>
      <TextField
        id={id}
        label={caption}
        helperText={tooltip}
        value={value}
        variant="outlined"
        disabled={disabled}
        slotProps={slotProps}
        size={big ? 'medium' : 'small'}
        fullWidth={inside}
        onChange={onValueChange}
      />
    </Root>
  );
};

export default TextInput;
