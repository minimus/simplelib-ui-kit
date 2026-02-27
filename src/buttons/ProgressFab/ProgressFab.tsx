import React, { useEffect, useState, useRef, useEffectEvent, FC } from 'react';
import { green, red } from '@mui/material/colors';
import { Box, CircularProgress, Fab, Tooltip } from '@mui/material';

import { wait } from '../../utils/utils';
import { IProgressFab } from '../../types';

import ContentIcon from './ContentIcon';

const ProgressFab: FC<IProgressFab> = (props) => {
  const {
    processing = false,
    success = false,
    error = false,
    disabled = false,
    color = 'default',
    sx,
    size = 'medium',
    tooltip = '',
    displayPosition = { top: 0, left: 0 },
    successIcon,
    errorIcon,
    delay,
    children,
    onClick,
    onDelay,
  } = props;

  const getProgressSize = (buttonSize: 'small' | 'medium' | 'large'): number => {
    if (buttonSize === 'small') return 52;
    if (buttonSize === 'medium') return 60;
    return 68;
  };

  const [progressSize, setProgressSize] = useState<number>(() => getProgressSize(size));

  const timerRef = useRef(null);

  const onDoubleClick = () => false;

  const buttonSx = {
    ...(success && {
      'bgcolor': green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    ...(error && {
      'bgcolor': red[500],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
  };

  const updateProgressSize = useEffectEvent(() => {
    setProgressSize(getProgressSize(size));
  });

  useEffect(() => {
    updateProgressSize();
  }, [size]);

  useEffect(() => {
    if (error || success) {
      if (delay && onDelay) {
        void wait(delay, onDelay).then((id: number) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          timerRef.current = id;
        });
      }
    }
  }, [delay, error, onDelay, success]);

  return (
    <Box sx={{ position: 'fixed', ...displayPosition }}>
      <Tooltip title={tooltip} arrow>
        <div>
          <Fab color={color} sx={sx ?? buttonSx} size={size} disabled={disabled} onClick={onClick} onDoubleClick={onDoubleClick}>
            <ContentIcon success={success} successIcon={successIcon} error={error} errorIcon={errorIcon}>
              {children}
            </ContentIcon>
          </Fab>
        </div>
      </Tooltip>
      {processing && (
        <CircularProgress
          size={progressSize}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default ProgressFab;
