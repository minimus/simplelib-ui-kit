import React, { ChangeEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { ChromePicker } from 'react-color'
import { ColorCover, ColorPopover, ColorSelectIcon, Root } from '../styles'
import { IColorsInput, IColor } from '../types'

const ColorsInput = (props: IColorsInput): JSX.Element => {
	const { id, caption, tooltip, value, size = 'small', inside = false, disabled = false, onChange } = props

	const [visible, setVisible] = useState(false)

	const handleClick = () => {
		setVisible(!visible)
	}

	const handleClose = () => {
		setVisible(false)
	}

	const inputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton disabled={disabled} onClick={handleClick}>
					<ColorSelectIcon value={value} />
				</IconButton>
			</InputAdornment>
		),
	}

	const onValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.value)
	}

	const onColorChange = (color: IColor) => {
		const { r = 0, g = 0, b = 0, a = 1 } = color?.rgb
		onChange(a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`)
	}

	return (
		<Root relative size={size} inside={inside} button>
			<TextField
				id={id}
				label={caption}
				helperText={tooltip}
				value={value}
				variant="outlined"
				size="small"
				disabled={disabled}
				InputProps={inputProps}
				onChange={onValueChange}
			/>
			{visible && (
				<ColorPopover>
					<ColorCover onClick={handleClose} />
					<ChromePicker color={value} onChange={onColorChange} />
				</ColorPopover>
			)}
		</Root>
	)
}

ColorsInput.defaultProps = {
	size: 'small',
	tooltip: '',
	inside: false,
	disabled: false,
	onChange: undefined,
}

export default ColorsInput
