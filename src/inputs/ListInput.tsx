import React, { ChangeEvent, JSX } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { Root } from '../styles';
import { IListInput, IListValue } from '../types';

const ListInput = (props: IListInput): JSX.Element => {
  const { id, value, values, caption, tooltip = '', size = 'small', disabled = false, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      const val = e?.target?.value;
      onChange(val);
    }
  };

  return (
    <Root size={size}>
      <TextField id={id} select value={value} label={caption} helperText={tooltip} disabled={disabled} onChange={handleChange} variant="outlined">
        {values.map((item: IListValue, idx: number) => (
          <MenuItem key={idx.toString()} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </TextField>
    </Root>
  );
};

export default ListInput;
