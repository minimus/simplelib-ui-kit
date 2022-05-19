import React from 'react'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FieldCaption, FieldTooltip, RadioGroupRoot, Root } from '../styles'

export type TListValue = {
	text: string
	value: string
}

type TProps = {
	id: string
	caption: string
	tooltip: string | JSX.Element
	value: unknown
	values: TListValue[]
	size?: 'small' | 'half' | 'big' | 'fill'
	big?: boolean
	direction?: 'row' | 'column'
	onChange?: (value) => unknown | undefined
}

const RadioInput = (props: TProps): JSX.Element => {
	const { id, value, values, caption, tooltip, size = 'small', big = false, direction = 'column', onChange } = props

	const onValueChange = (val: any) => () => {
		if (onChange) {
			onChange(val)
		}
	}

	return (
		<Root size={size} style={{ margin: '0 5px' }}>
			<FieldCaption>{caption}</FieldCaption>
			<RadioGroupRoot column={direction === 'column'}>
				{values?.map((item: TListValue, idx: number) => (
					<FormControlLabel
						key={idx.toString()}
						value={item.value}
						control={<Radio color="primary" size={big ? 'medium' : 'small'} />}
						label={item.text}
						name={id}
						checked={item.value === value}
						onChange={onValueChange(item.value)}
					/>
				))}
			</RadioGroupRoot>
			<FieldTooltip>{tooltip}</FieldTooltip>
		</Root>
	)
}

RadioInput.defaultProps = {
	size: 'small',
	big: false,
	direction: 'column',
	onChange: undefined,
}

export default RadioInput
