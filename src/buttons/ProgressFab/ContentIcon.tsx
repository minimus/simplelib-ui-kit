import React from 'react'
import { Check as CheckIcon, Warning as WarningIcon } from '@mui/icons-material'
import { IContentIcon } from '../../types'

const ContentIcon = (props: IContentIcon): JSX.Element => {
	const { success, successIcon = <CheckIcon />, error, errorIcon = <WarningIcon />, children } = props

	if (success && !error) return successIcon
	if (error && !success) return errorIcon
	return children
}

ContentIcon.defaultProps = {
	successIcon: <CheckIcon />,
	errorIcon: <WarningIcon />,
}

export default ContentIcon
