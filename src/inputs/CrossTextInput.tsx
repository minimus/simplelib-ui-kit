import React from 'react'
import {
	CrossFieldContent,
	CrossFieldDoubleRow,
	CrossFieldSingleRow,
	FieldCaption,
	FieldTooltip,
	Root,
} from '../styles'
import TextInput from './TextInput'

type TProps = {
	id: string
	caption: string
	captions: string[]
	values: number[]
	tooltip: string
	onChange: (val: Array<number>) => void | undefined
}

const CrossTextInput = (props: TProps): JSX.Element => {
	const { id, caption, captions, values, tooltip, onChange } = props
	const [topCaption, leftCaption, rightCaption, bottomCaption] = captions
	const [top, left, right, bottom] = values

	const handleChange =
		(key: 'top' | 'left' | 'right' | 'bottom') =>
		(value: number): void => {
			if (onChange) {
				if (!Number.isNaN(Number(value))) {
					const obj = { top, left, right, bottom, [key]: value }
					onChange([obj.top, obj.left, obj.right, obj.bottom])
				}
			}
		}

	return (
		<Root size="fill">
			<FieldCaption style={{ margin: '0 5px' }}>{caption}</FieldCaption>
			<CrossFieldContent>
				<CrossFieldSingleRow>
					<TextInput
						size="xSmall"
						value={top}
						contentType="number"
						caption={topCaption}
						id={`${id}-top`}
						inside
						suffix="px"
						onChange={handleChange('top')}
					/>
				</CrossFieldSingleRow>
				<CrossFieldDoubleRow>
					<TextInput
						size="xSmall"
						value={left}
						contentType="number"
						caption={leftCaption}
						id={`${id}-left`}
						inside
						suffix="px"
						onChange={handleChange('left')}
					/>
					<TextInput
						size="xSmall"
						value={right}
						contentType="number"
						caption={rightCaption}
						id={`${id}-right`}
						inside
						suffix="px"
						onChange={handleChange('right')}
					/>
				</CrossFieldDoubleRow>
				<CrossFieldSingleRow>
					<TextInput
						size="xSmall"
						value={bottom}
						contentType="number"
						caption={bottomCaption}
						id={`${id}-bottom`}
						inside
						suffix="px"
						onChange={handleChange('bottom')}
					/>
				</CrossFieldSingleRow>
			</CrossFieldContent>
			<FieldTooltip style={{ margin: '0 5px' }}>{tooltip}</FieldTooltip>
		</Root>
	)
}

export default CrossTextInput
