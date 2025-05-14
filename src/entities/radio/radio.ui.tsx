import { useContext } from 'react'
import RadioContext from './radio.context'
import { Radio } from './radio.style'

const _ = ({ children, value, name, defaultChecked, disabled, checked }: any) => {
	const group: any = useContext(RadioContext)
	if (checked !== undefined) {
		group.value = checked
	}

	return (
		<Radio className='inp-radio'>
			<input type='radio' value={value} name={name} defaultChecked={defaultChecked} disabled={disabled || group.disabled} checked={group.value !== undefined ? value === group.value : undefined} onChange={e => group.onChange && group.onChange(e.target.value)} />
			<i className='ic'></i>
			<em className='t'>{children}</em>
		</Radio>
	)
}

export default _
