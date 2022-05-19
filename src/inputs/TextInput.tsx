import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Root } from '../styles'

type TProps = {
	id: string
	caption: string
	tooltip?: string | JSX.Element
	contentType?: string
	value: unknown
	suffix?: string | JSX.Element
	size?: 'xSmall' | 'small' | 'half' | 'big' | 'fill'
	big?: boolean
	inside?: boolean
	disabled?: boolean
	button?: boolean
	onChange?: (val: string | number) => void | undefined
}

const TextInput = (props: TProps): JSX.Element => {
	const {
		id,
		caption,
		tooltip,
		value,
		contentType = 'text',
		size = 'small',
		big = false,
		suffix = '',
		inside = false,
		disabled = false,
		button = false,
		onChange,
	} = props

	const onValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (onChange) {
			const val = e?.target?.value
			if (contentType === 'number') {
				if (!Number.isNaN(Number(val))) {
					onChange(Number(val))
				}
			} else {
				onChange(val)
			}
		}
	}

	// const endAdornment = suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : null
	const inputProps = {
		// type: contentType,
		...(suffix ? { endAdornment: <InputAdornment position="end">{suffix}</InputAdornment> } : {}),
	}

	return (
		<Root size={size} inside={inside} button={button}>
			<TextField
				id={id}
				label={caption}
				helperText={tooltip}
				value={value}
				variant="outlined"
				disabled={disabled}
				InputProps={inputProps}
				size={big ? 'medium' : 'small'}
				fullWidth={inside}
				onChange={onValueChange}
			/>
		</Root>
	)
}

TextInput.defaultProps = {
	size: 'small',
	big: false,
	tooltip: '',
	suffix: undefined,
	contentType: 'text',
	inside: false,
	disabled: false,
	button: false,
	onChange: undefined,
}

export default TextInput
