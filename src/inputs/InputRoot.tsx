import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface IProps {
  relative?: boolean;
  button?: boolean;
  inside?: boolean;
  size?: string;
  children: ReactNode | ReactNode[];
}

const getSize = (val: string | undefined): string => {
  switch (val) {
    case 'xSmall':
      return '150px';
    case 'small':
      return '300px';
    case 'half':
      return '50%';
    case 'big':
      return '75%';
    case 'fill':
      return '100%';
    default:
      return '150px';
  }
};

const InputRoot: FC<IProps> = (props) => {
  const { children, relative = false, button = false, inside = false, size = 'small' } = props;

  return (
    <Box
      sx={{
        'position': relative ? 'relative' : 'inherit',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'justifyContent': 'flex-start',
        'width': inside ? 'inherit' : '100%',
        'margin': '5px 0 10px',
        '& .MuiTextField-root': {
          width: `calc(${getSize(size)} - 10px)`,
          margin: '5px',
        },
        /*'& .MuiOutlinedInput-adornedEnd': {
          paddingRight: button ? '0' : '14px',
        },*/
      }}
    >
      {children}
    </Box>
  );
};

export default InputRoot;
