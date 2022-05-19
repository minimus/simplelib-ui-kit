import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Root } from '../styles'
import type { TListValue } from './RadioInput'

type TProps = {
	value: string
	values: TListValue[]
	id: string
	caption: string
	tooltip?: string
	size?: 'xSmall' | 'small' | 'half' | 'big' | 'fill'
	disabled?: boolean
	onChange?: (val: string | number) => void | undefined
}

const ListInput = (props: TProps): JSX.Element => {
	const { id, value, values, caption, tooltip = '', size = 'small', disabled = false, onChange } = props

	const handleChange = (e: ChangeEvent<HTMLInputElement>): any => {
		if (onChange) {
			const val = e?.target?.value
			onChange(val)
		}
	}

	return (
		<Root size={size}>
			<TextField
				id={id}
				select
				value={value}
				label={caption}
				helperText={tooltip}
				disabled={disabled}
				onChange={handleChange}
				variant="outlined"
			>
				{values.map((item: TListValue, idx: number) => (
					<MenuItem key={idx.toString()} value={item.value}>
						{item.text}
					</MenuItem>
				))}
			</TextField>
		</Root>
	)
}

ListInput.defaultProps = {
	tooltip: '',
	size: 'small',
	disabled: false,
	onChange: undefined,
}

export default ListInput
