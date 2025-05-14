import { ReactNode } from 'react'
import { Checkbox } from './checkbox.style'

type Props = {
	children?: ReactNode
	name?: string
	className?: string
	disabled?: boolean
	checked: boolean
	onChange: (checked: boolean) => void
}

const _ = ({ children, name, className, disabled, checked, onChange }: Props) => {
	return (
		<Checkbox className={className === 'inp-range' ? 'inp-range' : `inp-check ` + className}>
			<input
				type='Checkbox'
				disabled={disabled}
				checked={checked}
				onChange={e => {
					onChange(e.target.checked)
				}}
			/>
			<i className='ic'></i>
			{children ? <em className='t'>{children}</em> : null}
		</Checkbox>
	)
}

export default _
