import React, { FC } from 'react';
import { Check as CheckIcon, Warning as WarningIcon } from '@mui/icons-material';

import { IContentIcon } from '../../types';

const ContentIcon: FC<IContentIcon> = (props) => {
  const { success, successIcon = <CheckIcon />, error, errorIcon = <WarningIcon />, children } = props;

  if (success && !error) return successIcon;
  if (error && !success) return errorIcon;
  return children;
};

export default ContentIcon;
