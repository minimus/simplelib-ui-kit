import React, { ChangeEvent } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { Root } from '../styles'
import { ISwitchInput } from '../types'

const SwitchInput = (props: ISwitchInput): JSX.Element => {
	const { id, caption, value, size = 'small', disabled = false, onChange = undefined } = props

	const onValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (onChange) {
			const val = e?.target?.checked
			if (Number.isInteger(value)) {
				onChange(val ? 1 : 0)
			} else {
				onChange(val)
			}
		}
	}

	return (
		<Root size={size} style={{ margin: '0 5px' }}>
			<FormControlLabel
				control={
					<Switch checked={!!value} onChange={onValueChange} name={id} color="primary" disabled={disabled} />
				}
				label={caption}
			/>
		</Root>
	)
}

SwitchInput.defaultProps = {
	size: 'small',
	disabled: false,
	onChange: undefined,
}

export default SwitchInput
