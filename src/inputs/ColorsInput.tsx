import React, { ChangeEvent, useState, FC, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import { ChromePicker } from 'react-color';
import { FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

import { ColorCover, ColorPopover, ColorSelectIcon } from '../styles';
import { IColorsInput, IColor } from '../types';

import InputRoot from './InputRoot';

const ColorsInput: FC<IColorsInput> = (props) => {
  const { id, caption, tooltip, value, size = 'small', inside = false, disabled = false, onChange } = props;

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  const onColorChange = (color: IColor) => {
    const { r = 0, g = 0, b = 0, a = 1 } = color?.rgb ?? {};
    onChange?.(a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <InputRoot relative size={size} inside={inside} button>
      <FormControl>
        <InputLabel htmlFor={id}>{caption}</InputLabel>
        <OutlinedInput
          id={id}
          label={caption}
          value={value}
          disabled={disabled}
          endAdornment={
            <InputAdornment position="end">
              <IconButton disabled={disabled} onClick={handleClick}>
                <ColorSelectIcon value={value} />
              </IconButton>
            </InputAdornment>
          }
          size="small"
          onChange={onValueChange}
        />
        {tooltip && <FormHelperText>{tooltip}</FormHelperText>}
      </FormControl>
      {visible && (
        <ColorPopover>
          <ColorCover onClick={handleClose} />
          <ChromePicker color={value} onChange={onColorChange} />
        </ColorPopover>
      )}
    </InputRoot>
  );
};

export default ColorsInput;
