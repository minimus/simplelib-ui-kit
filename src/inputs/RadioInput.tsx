import React, { JSX } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FieldCaption, FieldTooltip, RadioGroupRoot, Root } from '../styles';
import { IRadioInput, IListValue } from '../types';

const RadioInput = (props: IRadioInput): JSX.Element => {
  const { id, value, values, caption, tooltip, size = 'small', big = false, direction = 'column', onChange } = props;

  const onValueChange = (val: unknown) => () => {
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <Root size={size} style={{ margin: '0 5px' }}>
      <FieldCaption>{caption}</FieldCaption>
      <RadioGroupRoot column={direction === 'column'}>
        {values?.map((item: IListValue, idx: number) => (
          <FormControlLabel
            key={idx.toString()}
            value={item.value}
            control={<Radio color="primary" size={big ? 'medium' : 'small'} />}
            label={item.text}
            name={id}
            checked={item.value === value}
            onChange={onValueChange(item.value)}
          />
        ))}
      </RadioGroupRoot>
      <FieldTooltip>{tooltip}</FieldTooltip>
    </Root>
  );
};

export default RadioInput;
