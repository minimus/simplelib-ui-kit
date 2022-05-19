import React from 'react'
import { Check as CheckIcon, Warning as WarningIcon } from '@mui/icons-material'

type TProps = {
	success: boolean
	successIcon?: JSX.Element
	error: boolean
	errorIcon?: JSX.Element
	children: JSX.Element
}

const ContentIcon = (props: TProps): JSX.Element => {
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
