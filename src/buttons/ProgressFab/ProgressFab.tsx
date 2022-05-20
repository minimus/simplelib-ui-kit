import React, { useEffect, useState, useRef, MouseEventHandler } from 'react'
import { green, red } from '@mui/material/colors'
import { Box, CircularProgress, Fab, Tooltip } from '@mui/material'
import ContentIcon from './ContentIcon'
import { wait } from '../../utils/utils'
import { IProgressFab } from '../../types'

const ProgressFab = (props: IProgressFab): JSX.Element => {
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
	} = props

	const getProgressSize = (buttonSize: 'small' | 'medium' | 'large'): number => {
		if (buttonSize === 'small') return 52
		if (buttonSize === 'medium') return 60
		return 68
	}

	const [progressSize, setProgressSize] = useState<number>(getProgressSize(size))

	const timerRef = useRef(null)

	const onDoubleClick = () => false

	const buttonSx = {
		...(success && {
			bgcolor: green[500],
			'&:hover': {
				bgcolor: green[700],
			},
		}),
		...(error && {
			bgcolor: red[500],
			'&:hover': {
				bgcolor: red[700],
			},
		}),
	}

	useEffect(() => {
		setProgressSize(getProgressSize(size))
	}, [size])

	useEffect(() => {
		if (error || success) {
			if (delay && onDelay) {
				void wait(delay, onDelay).then((id: number) => {
					timerRef.current = id
				})
			}
		}
	}, [error, success])

	return (
		<Box sx={{ position: 'fixed', ...displayPosition }}>
			<Tooltip title={tooltip} arrow>
				<div>
					<Fab
						color={color}
						sx={sx ?? buttonSx}
						size={size}
						disabled={disabled}
						onClick={onClick}
						onDoubleClick={onDoubleClick}
					>
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
	)
}

ProgressFab.defaultProps = {
	processing: false,
	success: false,
	error: false,
	disabled: false,
	color: 'default',
	sx: undefined,
	size: 'medium',
	tooltip: '',
	displayPosition: { top: 0, left: 0 },
	successIcon: undefined,
	errorIcon: undefined,
	delay: undefined,
	onDelay: undefined,
}

export default ProgressFab
